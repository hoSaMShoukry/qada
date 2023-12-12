<!-- eslint-disable no-undef -->
<template>
    <div class="container">
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-success fs-5" @click="showModal" style="width: 200px;">
     اضافة عرض 
    </button>
  
    <!-- Modal -->
    <div
      class="modal fade w-100 text-center"
      id="demoModal"
      tabindex="-1"
      aria-labelledby="demoModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog ">
        <div class="modal-content rounded-5 d-inline-block w-100" style="background-color:#1A6177;">
          <div class="modal-body d-flex flex-column align-items-center ">
            <div class="modal-text my-3">
                <p class="text-center">ادخل البيانات المطلوبة من فضلك</p>

                <table class="table table-bordered">
                    <thead>
                      <tr>
                        <th scope="col">المرحلة</th>
                        <th scope="col">البند</th>
                        <th scope="col">النسبة</th>
                        <th scope="col">عدد الايام</th>
                        <th scope="col">السعر</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr scope="row" v-for="stage , index in offerArr" :key="index">
                        <th >
                          <span :class="`fs-6 mt-5 stage${index}`" >{{ index + 1 }}</span>
                          <span class="px-1"></span>
                          <svg @click="addOfferStage()" style="cursor: pointer;" class="mb-1 mr-2" xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM200 344V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H248v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/></svg>
                        </th>
                        <td>
                      <input v-model="stage.title" type="text" :class="`form-control w-100 title${index}`" id="exampleInputEmail1" aria-describedby="emailHelp">
    
                        </td>
                        <td>
                          <input @input="calcTotal" v-model="stage.percent" type="number" :class="`form-control w-100 percent${index}`" id="exampleInputEmail1" aria-describedby="emailHelp">
                        </td>
                        <td>
                          <input @input="calcTotal" v-model="stage.duration" type="number" :class="`form-control w-100 duration${index}`" id="exampleInputEmail1" aria-describedby="emailHelp">
                        </td>
                        <td>
                          <input @input="calcTotal" v-model="stage.price" type="number" :class="`form-control w-100 price${index}`" id="exampleInputEmail1" aria-describedby="emailHelp">
                        </td>
                      </tr>
                      <tr>
                        <td colspan="2"> الاجمالى</td>
                        <td>
                             {{ allpercentage ? allpercentage : 0}} %
                        </td>
                         <td>
                             {{ allDays ? allDays : 0 }}
                        </td>
                        <td>
                             {{ allprice ? allprice : 0 }}
                        </td>

                      </tr>
                    </tbody>
                  </table>

                <p><span class="">تنويه</span> : عرض السعر  المرسل يشمل ضريبة القيمة المضافة 15%. سيتم حساب عمولة المنصة 7%  بشكل آلي من قيمة العقد كاملًا</p>
                <p>بالإضافة إلي ضريبة القيمة المضافة 15%. يتم حساب عمولة 7% في كل مرحلة من مراحل المشروع.</p>
                <div class="row d-flex btn-offers">
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 text-center add-offer"><button class="text-white rounded-4 btn-offer">اضافة العرض السعرى</button></div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 text-center add-offer"><button class="text-white  rounded-4 btn-offer" @click="sendOffer">
                    <span v-if="loading == false" class="fs-6">إرسال</span>
                    <SwappingSquaresSpinner v-if="loading == true" :animation-duration="1000" :size="40" color="#ff1d5e" />
                  </button></div>
                  <div class="text-center"><span class="fs-6 text-white">{{ validation }}</span></div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
  </template>
<!--   
  <script setup>
  import { ref, onMounted } from "vue";
  
  const modal = ref(null);
  /* eslint-disable no-undef */
/* eslint-enable no-undef */

  onMounted(() => {
    // eslint-disable-next-line no-undef
    modal.value = new bootstrap.Modal(document.getElementById("demoModal"));
  });
  
  const showModal = () => {
    modal.value.show();
  };
  
//   const hideModal = () => {
//     modal.value.hide();
//   };
  
//   const saveChanges = () => {
//     console.log("Changes saved!");
//   };
  </script> -->

  <script setup>
  import axios from "axios";
  import { SwappingSquaresSpinner  } from 'epic-spinners'
import { ref, onMounted , defineProps } from "vue";  
const props =  defineProps(['id']);
  const projectId = ref(props.id);
   const offerArr = ref([{
    title:'',
    percent:'',
    duration:'',
    price:''
   }]);
   
   const addOfferStage = ()=>{
    offerArr.value.push({
      title:null,
      percent:null,
      duration:null,
      price:null
    })
   }
   const validation = ref();
   const loading = ref(false);
   const project = ref({});
   const getOffer = async()=>{
  await axios.get(`https://test.m-aboelela.online/api/project/${projectId.value}`)
  .then((res)=>{
     if(res.status == 200){
      project.value = res.data; 
      localStorage.setItem('project' , JSON.stringify(project.value))
      localStorage.setItem('offers' , JSON.stringify(project.value.offers))
     }
  }).catch((rej)=> console.log(rej));
   }
   const sendOffer =async ()=>{
    if(allpercentage.value > 100){ 
    validation.value = 'يجب ان لا تتجاوز النسبة 100'

   }else{
    loading.value = true
    await axios.post('https://test.m-aboelela.online/api/office/offers/placeOffer',{
         project_id:projectId.value,
         offer:offerArr.value
       },{
        headers: {
            'Content-Type': 'multipart/form-data',
                "Accept": "*/*",
                "Content-Length": '',
                "Accept-Encoding": 'gzip, deflate, br',
                "Connection": 'keep-alive',
                "Host": '',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
              },
       })
       .then((res)=>{
        if(res.status == 200){
          loading.value = false
           validation.value = 'تم ارسال الطلب '
           getOffer();
            console.log(res.data);
            setTimeout(() => {
               // this.registerd = ''
            }, 3000);
        }
       }).catch((err)=>{
        if(err){
          loading.value = false;
          validation.value = 'فشل الارسال تأكد من النسبة والبيانات'
            console.log(err);
           // this.registerd = 'فشل الارسال الرجاء التأكد من البيانات'
            setTimeout(() => {
               // this.registerd = ''
            }, 3000);
        }
       })
   }
    

   }
   const allDays = ref()
   const allprice = ref()
   const allpercentage = ref()
   const calcTotal = ()=>{
    let days = 0;
    let price = 0;
    let percent = 0;
    for(let i=0 ; i<offerArr.value.length ; i++){
      days +=offerArr.value[i].duration
      price +=offerArr.value[i].price
      percent +=offerArr.value[i].percent
      allDays.value = days;
      allprice.value = price;
      allpercentage.value = percent;
      console.log(allDays.value);
      console.log(allprice.value);
      console.log(allpercentage.value);
    }
   }
  const modal = ref(null);
  onMounted(() => {
    getOffer();
    // eslint-disable-next-line no-undef
    modal.value = new bootstrap.Modal(document.getElementById("demoModal"));
  });

  const showModal = () => {
    modal.value.show();
    /*setTimeout(() => {
      modal.value.hide();
    }, 10000); 
  */
  };
</script>


<style scoped>

.blur-background {
  filter: blur(5px);
  /* You can adjust the blur intensity as needed */
}


.modal-text{
color:#FFF;
text-align: center;
font-family: Cairo;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
.btn-offers button{
border-radius: 8px;
background: #008955;
}
.btn-offer{
  padding:10px 15px 10px 15px ;
}
.btn-offer:hover{
  background-color: rgb(16, 137, 26);
}
@media (max-width: 767px) {
  .add-offer{
    position: relative;
    top: 5px !important;
  }
  
}
</style>