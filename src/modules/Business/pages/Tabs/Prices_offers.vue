<template>
    <div class="mt-5">
    <div class="row justify-content-between  p-3 m-auto my-3 text-center card1 ">
        <p><span>ملاحظة : </span>
             سيتعين عليك طرح مشروعك من جديد في حال لم يتم التعاقد مع مكتب هندسي
            خلال مدة 10 أيام</p>
    </div>
    <div class="row justify-content-between w-50  m-auto my-3 ">
        <div class="col-lg-5 offers col-md-12 col-sm-12 col-xs-12 text-center">
            <p>عروض الاسعار المستلمة</p>
        </div>
        <div class="col-lg-2 offers col-md-12 col-sm-12 col-xs-12 text-center">
            <p >
                {{ offers.length }}
                عرض</p>
        </div>
    </div>
    <div v-if="userId != sendFile.projectId" class="text-center mb-5"><span class="fs-4 text-danger">غير مسموح الا لمالك المشروع</span></div>

    <div class="row justify-content-between  p-3 m-auto my-3 cardd" v-if="userId == sendFile.projectId">
        <div class="row">
            <div class="col-lg-3 text-center">
                <p>المكتب الهندسي</p>
                <h5 v-for="offer , index in offers" :key="index">{{ offer.user.name }}</h5>
                <h6 class="tasnif">تصنيف درجة خامسة</h6>
            </div>
            <div class="col-lg-4 text-center">
                <p>مراحل المشروع المقترحة</p>
                <h5 v-for="offer , index in offers" :key="index">{{ offer.stages_count }}</h5>
            </div>
            <div class="col-lg-3 text-center">
                <p>مدة المشروع المقترحة </p>
                <h5 v-for="offer , index in offers" :key="index">{{ offer.duration }}</h5>
            </div>
            <div class="col-lg-2 text-center">
                <p>السعر</p>
                <h5 v-for="offer , index in offers" :key="index"><sub>SAR</sub>{{ offer.value }}</h5>
                <h6 class="allprice">(المبلغ الإجمالي شامل ضريبة القيمة المضافة)</h6>
            </div>
        </div>
        <div class="row justify-content-between text-center ">
            <div class="col-lg-4">
                <button @click="contract_offer.contractNewOffer('https://test.m-aboelela.online/api/business/contracts/create' , project_id , offerId)" type="button" class="btnn btn mt-3">تعاقد الأن</button>
            </div>
            <div class="col-lg-4">
                <button type="button" class="btnn btn mt-3">العرض الفني والمالي</button>
            </div>
            <div class="col-lg-4">
                <button type="button" class=" btnnn btn mt-3">طلب تخفيض عرض السعر</button>
            </div>
        </div>
        <div class="text-center"><span class="fs-6 text-danger">{{ contract_offer.contracted }}</span></div>
    </div>
    <!--
<div class="row justify-content-between  p-3 m-auto my-3 cardd">
        <div class="row">
            <div class="col-lg-3 text-center">
                <p>المكتب الهندسي</p>
                <h5 class="company">شركة المهندسين</h5>
                <h6 class="tasnif">تصنيف درجة خامسة</h6>
            </div>
            <div class="col-lg-4 text-center">
                <p>مراحل المشروع المقترحة</p>
                <h5>5</h5>
            </div>
            <div class="col-lg-3 text-center">
                <p>مدة المشروع المقترحة </p>
                <h5>54يوم</h5>
            </div>
            <div class="col-lg-2 text-center">
                <p>السعر</p>
                <h5> <sub>SAR</sub>50,000</h5>
                <h6 class="allprice">(المبلغ الإجمالي شامل ضريبة القيمة المضافة)</h6>
            </div>
        </div>
        <div class="row justify-content-between text-center ">
            <div class="col-lg-4">
                <button type="button" class="btnn mt-3">تعاقد الأن</button>
            </div>
            <div class="col-lg-4">
                <button type="button" class="btnn mt-3">العرض الفني والمالي</button>
            </div>
            <div class="col-lg-4">
                <button type="button" class="btnnn mt-3">طلب تخفيض عرض السعر</button>
            </div>
        </div>
    </div>

    <div class="row justify-content-between  p-3 m-auto my-3 cardd">
        <div class="row">
            <div class="col-lg-3 text-center">
                <p>المكتب الهندسي</p>
                <h5 class="company">شركة المهندسين</h5>
                <h6 class="tasnif">تصنيف درجة خامسة</h6>
            </div>
            <div class="col-lg-4 text-center">
                <p>مراحل المشروع المقترحة</p>
                <h5>5</h5>
            </div>
            <div class="col-lg-3 text-center">
                <p>مدة المشروع المقترحة </p>
                <h5>54يوم</h5>
            </div>
            <div class="col-lg-2 text-center">
                <p>السعر</p>
                <h5> <sub>SAR</sub>50,000</h5>
                <h6 class="allprice">(المبلغ الإجمالي شامل ضريبة القيمة المضافة)</h6>
            </div>
        </div>
        <div class="row justify-content-between text-center ">
            <div class="col-lg-4">
                <button type="button" class="btnn mt-3">تعاقد الأن</button>
            </div>
            <div class="col-lg-4">
                <button type="button" class="btnn mt-3">العرض الفني والمالي</button>
            </div>
            <div class="col-lg-4">
                <button type="button" class="btnnn mt-3">طلب تخفيض عرض السعر</button>
            </div>
        </div>
    </div>

    <div class="row justify-content-between  p-3 m-auto my-3 cardd">
        <div class="row">
            <div class="col-lg-3 text-center">
                <p>المكتب الهندسي</p>
                <h5 class="company">شركة المهندسين</h5>
                <h6 class="tasnif">تصنيف درجة خامسة</h6>
            </div>
            <div class="col-lg-4 text-center">
                <p>مراحل المشروع المقترحة</p>
                <h5>5</h5>
            </div>
            <div class="col-lg-3 text-center">
                <p>مدة المشروع المقترحة </p>
                <h5>54يوم</h5>
            </div>
            <div class="col-lg-2 text-center">
                <p>السعر</p>
                <h5> <sub>SAR</sub>50,000</h5>
                <h6 class="allprice">(المبلغ الإجمالي شامل ضريبة القيمة المضافة)</h6>
            </div>
        </div>
        <div class="row justify-content-between text-center ">
            <div class="col-lg-4">
                <button type="button" class="btnn mt-3">تعاقد الأن</button>
            </div>
            <div class="col-lg-4">
                <button type="button" class="btnn mt-3">العرض الفني والمالي</button>
            </div>
            <div class="col-lg-4">
                <button type="button" class="btnnn mt-3">طلب تخفيض عرض السعر</button>
            </div>
        </div>
    </div>

    <div class="row justify-content-between  p-3 m-auto my-3 cardd">
        <div class="row">
            <div class="col-lg-3 text-center">
                <p>المكتب الهندسي</p>
                <h5 class="company">شركة المهندسين</h5>
                <h6 class="tasnif">تصنيف درجة خامسة</h6>
            </div>
            <div class="col-lg-4 text-center">
                <p>مراحل المشروع المقترحة</p>
                <h5>5</h5>
            </div>
            <div class="col-lg-3 text-center">
                <p>مدة المشروع المقترحة </p>
                <h5>54يوم</h5>
            </div>
            <div class="col-lg-2 text-center">
                <p>السعر</p>
                <h5> <sub>SAR</sub>50,000</h5>
                <h6 class="allprice">(المبلغ الإجمالي شامل ضريبة القيمة المضافة)</h6>
            </div>
        </div>
        <div class="row justify-content-between text-center ">
            <div class="col-lg-4">
                <button type="button" class="btnn mt-3">تعاقد الأن</button>
            </div>
            <div class="col-lg-4">
                <button type="button" class="btnn mt-3">العرض الفني والمالي</button>
            </div>
            <div class="col-lg-4">
                <button type="button" class="btnnn mt-3">طلب تخفيض عرض السعر</button>
            </div>
        </div>
    </div>

    <div class="row justify-content-between  p-3 m-auto my-3 cardd">
        <div class="row">
            <div class="col-lg-3 text-center">
                <p>المكتب الهندسي</p>
                <h5 class="company">شركة المهندسين</h5>
                <h6 class="tasnif">تصنيف درجة خامسة</h6>
            </div>
            <div class="col-lg-4 text-center">
                <p>مراحل المشروع المقترحة</p>
                <h5>5</h5>
            </div>
            <div class="col-lg-3 text-center">
                <p>مدة المشروع المقترحة </p>
                <h5>54يوم</h5>
            </div>
            <div class="col-lg-2 text-center">
                <p>السعر</p>
                <h5> <sub>SAR</sub>50,000</h5>
            </div>
        </div>
        <div class="row justify-content-between text-center ">
            <div class="col-lg-4">
                <button type="button" class="btnn mt-3">تعاقد الأن</button>
            </div>
            <div class="col-lg-4">
                <button type="button" class="btnn mt-3">العرض الفني والمالي</button>
            </div>
            <div class="col-lg-4">
                <button type="button" class="btnnn mt-3">طلب تخفيض عرض السعر</button>
            </div>
        </div>
    </div>

    <div class="row justify-content-between  p-3 m-auto my-3 cardd">
        <div class="row">
            <div class="col-lg-3 text-center">
                <p>المكتب الهندسي</p>
                <h5 class="company">شركة المهندسين</h5>
                <h6 class="tasnif">تصنيف درجة خامسة</h6>
            </div>
            <div class="col-lg-4 text-center">
                <p>مراحل المشروع المقترحة</p>
                <h5>5</h5>
            </div>
            <div class="col-lg-3 text-center">
                <p>مدة المشروع المقترحة </p>
                <h5>54يوم</h5>
            </div>
            <div class="col-lg-2 text-center">
                <p>السعر</p>
                <h5> <sub>SAR</sub>50,000</h5>
            </div>
        </div>
        <div class="row justify-content-between text-center ">
            <div class="col-lg-4">
                <button type="button" class="btnn mt-3">تعاقد الأن</button>
            </div>
            <div class="col-lg-4">
                <button type="button" class="btnn mt-3">العرض الفني والمالي</button>
            </div>
            <div class="col-lg-4">
                <button type="button" class="btnnn mt-3">طلب تخفيض عرض السعر</button>
            </div>
        </div>
    </div>
    -->

    

    </div>
</template>

<script>
import { onMounted, ref  } from 'vue';
import { contractOffer } from '@/stores/contract_offer';
import { useRoute } from 'vue-router';
import { projectFile } from '@/stores/projectFiles';
export default{
    setup() {
        const offers = ref([]);
        const contract_offer = contractOffer();
        const route = ref(useRoute().params);
        const project_id = ref(route.value.id)
        const offerId = ref(null);
        const userId = ref(null);
        const sendFile = projectFile();

    onMounted(() => {
    setTimeout(() => {
    offers.value = localStorage.getItem('offers') ? JSON.parse(localStorage.getItem('offers')) : '';
    offerId.value =offers.value.length > 0 ? offers.value[0].id : '';
    console.log(offerId.value);
    }, 500);
    if(localStorage.getItem('id')){
        userId.value = localStorage.getItem('id');
    }
});
return{
    offers,
    contract_offer,
    project_id,
    offerId,
    sendFile,
    userId
}}}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Tajawal&display=swap');

* {
    direction: rtl;
}
.card1 {
    width: 50%;
    border-radius: 10px;
    white-space: wrap;
    border: 1px solid#48847B;
}
p {
    color: #000000B2;
}
.cardd p {
    color: #575757;
    font-weight: 600;
}
span {
    color: #0C483F;
    font-weight: 700;
    font-size: 22px;
}
.offers {
    font-weight: 700;
    font-size: 20px;
    line-height: 46.85px;
}
.offers p{
 color: #B18718;
}

.cardd {
    width: 50%;
    border-radius: 10px;
    border: 1px solid#48847B;
    box-shadow: 0px 4px 4px 0px rgba(0.25, 0.25, 0.25, 0.25);
}
.company {
    color: #48847B;
}
.tasnif {
    font-size: 12px;
    font-weight: 600;
    color: #B18718;
}
.allprice {
    font-size: 10px;
    color: #B18718;
}
.btnn {
    color: #fff;
    background-color: #4A4E53;
    border: #4A4E53;
    border-radius: 8px;
    padding: 2px, 13px, 2px, 13px;
    height: 37px;
    

}

.btnnn {
    color: #fff;
    background-color: #0F9678;
    border: #0F9678;
    border-radius: 8px;
    padding: 2px, 13px, 2px, 13px;
    height: 37px;
}
@media (max-width:700px) {
  .card1{
    width: 80%;
  }  
    
}
@media (max-width: 400px) {
    .card1{
        width: 90%;
    }
    
}
@media(max-width: 576px){
        
    .cardd{
        width: 80%;
    }
}
</style>