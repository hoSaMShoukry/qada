<template>
  <div>
  <BusinessHeader />
  <div class="row" style="position: relative;top: -30px;max-width: 100%;overflow-x: hidden;">
    <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-12">
      <div class="sideCard"  v-motion-roll-top>
                    <ul>
                        <li class="text-light">مرحبا</li>
                        <li class="authName">{{ personName }}</li>
                        <li class="mt-4" @click="showComponent = 'مشاريعى'" style="cursor: pointer;">مشاريعى</li>
                        <li class="mt-4" @click="showComponent = 'اضافة مشروع'" style="cursor: pointer;">اضافة مشروع</li>
                        <!--التوجه لصفحة حسابى
                        to="usersStats"
                        -->
                        <li style="cursor: pointer;" @click="showComponent = 'حسابى'" class="mt-4 sidbarLink">حسابى</li>
                        <li class="mt-4 sidbarLink" @click="showComponent = 'المراسلات'" style="cursor: pointer;">المراسلات</li>
                        <li @click="logOut" class="mt-4"><router-link class="sidbarLink" to="">تسجيل خروج</router-link></li>
                    </ul>
                    </div>
            </div>
    <div class="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 container">
    <myProjects v-if="showComponent == 'مشاريعى'"/>
    <ChatBusiness v-if="showComponent == 'المراسلات'"/>
    <MyAccountBusiness v-if="showComponent == 'حسابى'"/>
    <div v-if="showComponent == 'اضافة مشروع'" v-motion-slide-top style="transition: 0.5s;">
      <div class="d-flex justify-content-between align-items-center mx-auto mt-5 main-section">
     
     <div class="text-center col-md-2 col-sm-4">
       <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
         <circle cx="50" cy="50" r="50" fill="#259F5A"/>
         <path d="M31.5 54.5L46.2122 65L65 35" stroke="white" stroke-width="5"/>
       </svg>
       <p class="project-draft d-block w-100">مسودة المشروع</p>
     </div>
     <hr class="col-md-6 col-sm-5 my-4 custom-hr">
     <div class="text-center col-md-2 col-sm-2">
       <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
         <circle cx="50" cy="50" r="50" fill="#656565" />
       </svg>
       <p class="d-block w-100" style="color:#656565;"> إرسال للمراجعة</p>
     </div>
   </div>
   <p class="projecttitle">تفاصيل المشروع</p>
   <form action="" class="add-project">
     <div class="row">
       <div class="col-12">
         <input type="text" class="form-control  project-details" 
         placeholder="المشروع عبارة عن مسودة يجب إرساله للمراجعة بعد الانتهاء." disabled />
       </div>  
     </div>
     <div class="row">
       <div class="col-12">
       <p>اسم المشروع
        <span class="text-danger" v-if="v$.project_title.$error">*</span>
       </p>
       <input type="text" class="form-control" v-model="form.project_title" />
     </div>
     </div>
     <div class="row ">
        <div class="col-12">
       <p>وصف المشروع (مثال: عدد غرف النوم، والفراغات، ومكونات المشروع )
        <span class="text-danger" v-if="v$.project_details.$error">*</span>
       </p>
       <textarea class="form-control" style="height: 6.5rem" v-model="form.project_details"
         placeholder="ارغب في تصميم فيلا دوبليكس مكونه من 4 غرف نوم و 5 حمامات والمرافق الخدمية لها..."></textarea>
       <p class="descriptionfortextarea">عدد الحروف لا يقل عن 150 (95/150)</p>
        </div>
     </div>
     <div class="row">
       <div class="col-12">
         <p>مساحة المشروع
          <span class="text-danger" v-if="v$.space.$error">*</span>
         </p>
         <input type="number" class="form-control text-start" min="0" placeholder="م2" v-model="form.space" />
       </div>
       <div class="col-12">
         <p>تصنيف المشروع
          <span class="text-danger" v-if="v$.service_category.$error">*</span>
         </p>
         <select  class="form-select  custom-select p-1" id="floatingSelect" v-model="form.service_category">
           <option selected></option>
           <option style="text-align: right;" v-for="item in getApiValues.service_category" :value="item.id" :key="item.id">{{ item.name }}</option>

         </select>
       </div>
     </div>
     
     <div class="row">
       <div class="col-12">
       <p>تاريخ نهاية طرح المشروع
        <span class="text-danger" v-if="v$.last_offers_date.$error">*</span>
       </p>
       <select class="form-select custom-select  px-0" id="floatingSelect" v-model="form.last_offers_date">
         <option selected></option>
         <option style="text-align: right;" value="4">طرح المشروع في منصة المشاريع لمدة 4 أيام</option>
         <option style="text-align: right;" value="9">طرح المشروع في منصة المشاريع لمدة 9 أيام</option>
       </select>
       <p class="descriptionfortextarea">لن يتم استقبال عروض اسعار جديدة ولن يظهر المشروع في منصة المشاريع بعد انتهاء طرح
         المشروع </p>
       </div>  
     </div>
     <div class="row">
       <div class="col-md-6 col-sm-12">
         <p>تاريخ ترسيخ نهاية المشروع
          <span class="text-danger" v-if="v$.delivery_date.$error">*</span>
         </p>
         <input type="number"  class="form-control" min="0" v-model="form.delivery_date" />
       </div>
       <div class="col-md-6 col-sm-12">
           <p>اختيار تصنيف المكاتب الهندسية
            <span class="text-danger" v-if="v$.eng_offices_class.$error">*</span>
           </p>
           <select  class="form-select" id="floatingSelect" v-model="form.eng_offices_class">
             <option selected></option>
             <option v-for="item in getApiValues.eng_offices_class" :key="item.id" :value="item.id">{{ item.name }}</option>
           </select>
           <p class="descriptionfortextarea">
             تختلف الاسعار نسبيا مع اختيار التصنيف (حيث انه التصنيف خو الاعلي
             سعرا)
           </p>
         </div>

       <div class="col-md-6 col-sm-12">
         <p>المدة المقترحة لأنهاء الاعمال المطلوبة
          <span v-if="v$.delivery_date.$error" class="text-danger">*</span>
         </p>
         <input type="number" placeholder="عدد الايام" class="form-control" min="0" v-model="form.project_days_limit" />
       </div>
       <div class="col-md-6 col-sm-12">
         <p>المنطقة</p>
         <input disabled class="form-control" id="area" v-model="form.area" />

       </div>
     </div>
     <div class="row">
     

      <div class="col-md-6 col-sm-12">
           <p>المدينة
            <span class="text-danger" v-if="v$.city.$error">*</span>
           </p>
          
           <input class="form-control"  type="text" disabled id="area" v-model="form.city" />
       
         </div>
     </div>

     <div class="row my-5 justify-content-center text-center">
       <div class="col">
           <p class="text-center">صورة من صك الملكية
            <span v-if="v$.title_deed.$error" class="text-danger">*</span>
           </p>
           <label for="propertyDoc" class="file-label">
             <img :src="add_project.first.path !='' ? add_project.first.path :  require('../../../assets/3322766-2001.png')" class="upload-image" />
           </label>
           <input type="file" id="propertyDoc" accept="image/*" @change="add_project.getFirstImage($event),form.title_deed= $event.target.files[0].name" class="file-input"
             style="display:none" />

         </div>
       <div class="col">
           <p class="text-center"> صورة من هوية المالك 
            <span v-if="v$.owner_id.$error" class="text-danger">*</span>
          </p>
           <label for="ownerIdDoc" class="file-label">
             <img :src="add_project.second.path !='' ? add_project.second.path :  require('../../../assets/3322766-2001.png')" class="upload-image" />
           </label>
           <input type="file" id="ownerIdDoc"
            @change="add_project.getSecondImage($event),form.owner_id = $event.target.files[0].name" class="file-input" style="display: none" />
       </div>
       <div class="col">
           <p class="text-center">مستندات اخري داعمة 
            <span v-if="v$.other_files.$error" class="text-danger">*</span>
           </p>
           <label for="otherDocs" class="file-label">
             <img :src="add_project.third.path !='' ? add_project.third.path :  require('../../../assets/3322766-2001.png')" class="upload-image" />
           </label>
           <input type="file" id="otherDocs" multiple 
           @change="add_project.getThirdImage($event),form.other_files = $event.target.files[0].name" 
           class="file-input"
             style="display: none" />
       </div>
   </div>
     
     <div class="row d-flex justify-content-between">
       <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
         <span>طلب جداول الكميات</span>
       </div>
       <div class="col-6">
         <input @click="check_box_validation_for_request_quety_tables($event)" class="form-check-input " type="checkbox" value="" v-model="form.request_qty_tables">
         <span v-if="v$.request_qty_tablesValidation.$error" class="text-danger fs-5">*</span>
        </div>
     </div>

     <div class="row d-flex justify-content-between">
       <div class="col-6">
         <span> عرض المشروع علي مهندسين ذو تصنيف معين</span>
       </div>
       <div class="col-6">
         <input @click="check_box_validation_for_requestEngs($event)" class="form-check-input " type="checkbox" value="" v-model="form.request_engs">
         <span v-if="v$.request_engsValidation.$error" class="text-danger fs-5">*</span>
        </div>
     </div>

     <div class="row">
       <div class="text-center mb-2"><span class="fs-6 text-danger">{{ registerd }}</span></div>
       <button @click.prevent="addproject()" class="btn btn-success">
        <span v-if="loading == false" class="fs-6">طرح مشروع</span>
          <span v-if="loading == true" class="d-inline-block">
            <looping-rhombuses-spinner :animation-duration="2500" :rhombus-size="20" color="#ff1d5e"/>
          </span>
      </button>
     </div>
   </form>
    </div>
   
 </div>
  </div>
  
</div> 
</template>

<script>
import myProjects from '@/modules/Business/pages/myProjects.vue'
import { useVuelidate } from '@vuelidate/core'
import { required  } from '@vuelidate/validators';
import { LoopingRhombusesSpinner } from 'epic-spinners'
import { ref, onMounted, reactive } from "vue";
// import memberService from "../services/memberService";
import BusinessHeader from "../components/BusinessHeader.vue"
//import memberService from "@/modules/members/services/memberService";
import axios from "axios";
import { addProjectMember } from "@/stores/memberAddProject";
import { getOptionsApi } from "@/stores/getApiOptions";
import router from '@/router';
import ChatBusiness from './chatBusiness.vue';
import MyAccountBusiness from './myAccountBusiness.vue';

export default {
  components: {
    BusinessHeader,
    LoopingRhombusesSpinner,
    myProjects,
    ChatBusiness,
    MyAccountBusiness
},
  setup() {
    let showComponent = ref('مشاريعى');
    const getApiValues = getOptionsApi();
    const logOut = ()=>{
      localStorage.clear();
      router.push('/')
    };
    const registerd = ref(null);
    const token = ref(null);
    const form = reactive({
      project_title: "",
      project_details: "",
      space: "",
      service_category: "",
      area: "المنطقة الوسطى",
      city: "الرياض",
      offer_choosing_date: "",
      project_days_limit: "",
      last_offers_date: "",
      request_qty_tables: false,
      request_engs: "",
      delivery_date: "",
      title_deed: "",
      owner_id: "",
      other_files: '',
      eng_offices_class:'',
      request_qty_tablesValidation :'',
      request_engsValidation :''
    });
    const rules = {
      project_title:{required},
      project_details: {required},
      space: {required},
      service_category: {required},
      last_offers_date: {required},
      area: {required},
      project_days_limit: {required},
      eng_offices_class: {required},
      delivery_date:{required},
      city: {required},
      title_deed: {required},
      owner_id: {required},
      other_files: {required},
      request_qty_tablesValidation: {required},
      request_engsValidation: {required},
    }
    const v$ = useVuelidate(rules, form)
    const check_box_validation_for_request_quety_tables = (e)=>{
             e.target.checked == true 
            ? form.request_qty_tablesValidation = 'checked' 
            : e.target.checked == false 
            ? form.request_qty_tablesValidation = ''
             : ''
    };
    const check_box_validation_for_requestEngs = (e)=>{
             e.target.checked == true 
            ? form.request_engsValidation = 'checked' 
            : e.target.checked == false 
            ? form.request_engsValidation = '' 
            : ''
    };
    const personName = ref( 
  localStorage.getItem('email') ?
  localStorage.getItem('email').slice(0,localStorage.getItem('email').indexOf('@'))
   : ''
  );
    const loading = ref(false);
    const add_project = addProjectMember();
    const addproject = async() => {
      console.log(v$.value.$errors);
      v$.value.$validate();
      if(v$.value.$errors.length == 0){
        loading.value = true;
        await axios.post('https://test.m-aboelela.online/api/business/projects/create' ,{
        project_title: form.project_title,
        project_details: form.project_details,
        space : form.space,
        service_category: form.service_category,
        last_offers_date : form.last_offers_date,
        area: form.area,
        project_days_limit: form.project_days_limit,
        eng_offices_class : form.eng_offices_class,
        city : 1,
        offer_choosing_date : new Date(),
        delivery_date:form.delivery_date,
        title_deed : add_project.firstImage,
        owner_id: add_project.secondImage,
        other_files :add_project.thirdImage,
        request_qty_tables: form.request_qty_tables,
        request_engs: form.request_engs
      } 
      ,
      {
        headers: {
        'Content-Type': 'multipart/form-data',
        "Accept": "*/*",
        "Content-Length": '',
        "Accept-Encoding": 'gzip, deflate, br',
        "Connection": 'keep-alive',
        "Host": '',
        'Authorization': 'Bearer ' + token.value
    },
      }
      )
      .then((res)=> {
      loading.value = false;
      console.log(res.data)
    if(res.status == 200){
      registerd.value = 'تم طرح المشروع بنجاح';
      setTimeout(() => {
        registerd.value = ''
      }, 3000);
    }
    }).catch((error)=>{
       console.log(error)
      if(error){
        loading.value = false;
        registerd.value = 'فشل فى ارسال المشروع لعدم اكتمال البيانات المطلوبة';
setTimeout(() => {
registerd.value = ''
}, 3000);
      }
      })
      // memberService.addproject(form).then((data)=> console.log(data.data))
     
      }
     
    }
    onMounted(() => {
      token.value = localStorage.getItem('token');
      getApiValues.getCities();
      getApiValues.getElectronicServices();
      getApiValues.setservice_category();
      getApiValues.seteng_offices_class();

     // addproject();
    })
    return {
      getApiValues,
      showComponent,
      personName,
      registerd,
      loading,
      addproject,
      token,
      form,
      add_project,
      v$,
      check_box_validation_for_request_quety_tables,
      check_box_validation_for_requestEngs,
      logOut
    }
  }

};
</script>

<style scoped>
* {
  direction: rtl;
}

.sideCard {
    position: absolute;
    top: -10px;
    right: 0;
    background-color: #54847D;
    color: #fff;
    width: 170px;
    height: 380px;
    text-align: center;
    border-radius: 22px 0 0 22px;
    padding-top: 20px;
    transition: 1s;
}
.sideCard:hover{
filter: brightness(1.3);
}

.sideCard li {
    list-style-type: none;
}

.sidbarLink {
    text-decoration: none;
    color: #FFFFFFB2;
    font-size: 18px;
    line-height: 33.73px;
}

.sideCard .authName {
    color: #ffffff;
    font-weight: 700;
    font-size: 25px;
    line-height: 46.85px;
}
.main-section {
  width: 80%;
  margin: auto;
}

.main-section p {
  margin-top: 10px;
  font-size: 15px;
  font-weight: 600;
  text-align: center;
  margin-left: 40px;
}

.custom-hr {
  margin-left: 1.25rem;
  border: none;
  height: 5px;
  background-color: #656565;
}

form {
  width: 80%;
  margin: auto;
}

form .form-control {
  margin-right: 0px;
  
}

form .form-select {
  background-color: aqua;
}

.custom-select {
  text-align: left;
}

/* Style the selected option */
/* Style the selected option */
select#floatingSelect option:checked {
  background-color: #259F5A;
  color: #fff;
}


/* Style the options on hover */
.custom-select:hover option:hover {
  background-color: #259F5A;
  color: #fff;
}

/* Style the dropdown arrow (optional) */
select#floatingSelect {
  background-repeat: no-repeat;
  background-position: right center;
  padding-right: 30px;
  /* Adjust based on your arrow icon width */
}


.projecttitle {
  color: #000;
  text-align: center;
  font-size: 35px;
  font-weight: 700;
}

.form-control {
  border: 1.5px solid #656565;
  background: #fff;
  
}

.form-control.project-details::placeholder {
  color: rgba(37, 159, 90, 0.70);
}


.descriptionfortextarea {
  color: #259F5A;
  text-align: right;
  font-size: 16px;
  font-weight: 400;
}

.form-control::-webkit-selection {
  background-color: #259F5A;
  color: white;
}

/* For Firefox */
.form-control::selection {
  background-color: #259F5A;
  color: white;
}

/* For Internet Explorer */
.form-control::-ms-value {
  background-color: #259F5A;
  color: white;
}

.row {
  margin: 10px 0px;
}

.add-project p {
  text-align: right;
}

.add-project {
  padding: 10px;

}

.form-check-input {
  background-color: #259F5A;
}

.form-check-input:checked {
  border-color: #259F5A;
  background-color: #259F5A;
}

.project-draft {
  color: #259F5A;
}
.file-label {
  cursor: pointer;
}

/* Style for the uploaded images */
.upload-image {
  width: 100px; /* Adjust the width as needed */
  height: 100px; /* Adjust the height as needed */
  object-fit: cover;
  padding: 10px;
  border-radius: 13px;
  background-color: #f2f2f2;
  box-shadow: 3px 4px 20px 0px rgba(0, 0, 0, 0.25);
}
@media (max-width:768px) {
  .container{
    display: block !important;
    margin-top: 60vh !important;

  }
  
}
</style>
