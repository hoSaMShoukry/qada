<template>
    <EngOfficesHeader/>
    <!--
<div class="row justify-content-between w-50 p-3 m-auto my-3 cardd mt-5">
        <div class="col-lg-3 col-sm-12 text-center">
            <p>المكتب الهندسي</p>
            <h5>شركة المهندسين</h5>
        </div>
        <div class="col-lg-3 text-center">
            <p>المدينة</p>
            <h5>الطائف</h5>
        </div>
        <div class="col-lg-3 text-center">
            <p>التصنيف</p>
            <h5 class="number">1</h5>
        </div>
    </div>

    <div class="row justify-content-between w-50 p-3 m-auto my-3 cardd">
        <div class="col-lg-3 text-center">
            <p>المكتب الهندسي</p>
            <h5>شركة المهندسين</h5>
        </div>
        <div class="col-lg-3 text-center">
            <p>المدينة</p>
            <h5>الطائف</h5>
        </div>
        <div class="col-lg-3 text-center">
            <p>التصنيف</p>
            <h5 class="number">1</h5>
        </div>
    </div>
    <div class="row justify-content-between w-50 p-3 m-auto my-3 cardd">
        <div class="col-lg-3 text-center">
            <p>المكتب الهندسي</p>
            <h5>شركة المهندسين</h5>
        </div>
        <div class="col-lg-3 text-center">
            <p>المدينة</p>
            <h5>الطائف</h5>
        </div>
        <div class="col-lg-3 text-center">
            <p>التصنيف</p>
            <h5 class="number">1</h5>
        </div>
    </div>
    <div class="row justify-content-between w-50 p-3 m-auto my-3 cardd">
        <div class="col-lg-3 text-center">
            <p>المكتب الهندسي</p>
            <h5>شركة المهندسين</h5>
        </div>
        <div class="col-lg-3 text-center">
            <p>المدينة</p>
            <h5>الطائف</h5>
        </div>
        <div class="col-lg-3 text-center">
            <p>التصنيف</p>
            <h5 class="number">1</h5>
        </div>
    </div>
    <div class="row justify-content-between w-50 p-3 m-auto my-3 cardd">
        <div class="col-lg-3 text-center">
            <p>المكتب الهندسي</p>
            <h5>شركة المهندسين</h5>
        </div>
        <div class="col-lg-3 text-center">
            <p>المدينة</p>
            <h5>الطائف</h5>
        </div>
        <div class="col-lg-3 text-center">
            <p>التصنيف</p>
            <h5 class="number">1</h5>
        </div>
    </div>
    <div class="row justify-content-between w-50 p-3 m-auto my-3 cardd">
        <div class="col-lg-3 text-center">
            <p>المكتب الهندسي</p>
            <h5>شركة المهندسين</h5>
        </div>
        <div class="col-lg-3 text-center">
            <p>المدينة</p>
            <h5>الطائف</h5>
        </div>
        <div class="col-lg-3 text-center">
            <p>التصنيف</p>
            <h5 class="number">1</h5>
        </div>
    </div>
    <div class="row justify-content-between w-50 p-3 m-auto my-3 cardd">
        <div class="col-lg-3 text-center">
            <p>المكتب الهندسي</p>
            <h5>شركة المهندسين</h5>
        </div>
        <div class="col-lg-3 text-center">
            <p>المدينة</p>
            <h5>الطائف</h5>
        </div>
        <div class="col-lg-3 text-center">
            <p>التصنيف</p>
            <h5 class="number">1</h5>
        </div>
    </div>
    <div class="row justify-content-between w-50 p-3 m-auto my-3 cardd">
        <div class="col-lg-3 text-center">
            <p>المكتب الهندسي</p>
            <h5>شركة المهندسين</h5>
        </div>
        <div class="col-lg-3 text-center">
            <p>المدينة</p>
            <h5>الطائف</h5>
        </div>
        <div class="col-lg-3 text-center">
            <p>التصنيف</p>
            <h5 class="number">1</h5>
        </div>
    </div>
    <div class="row justify-content-between w-50 p-3 m-auto my-3 cardd">
        <div class="col-lg-3 text-center">
            <p>المكتب الهندسي</p>
            <h5>شركة المهندسين</h5>
        </div>
        <div class="col-lg-3 text-center">
            <p>المدينة</p>
            <h5>الطائف</h5>
        </div>
        <div class="col-lg-3 text-center">
            <p>التصنيف</p>
            <h5 class="number">1</h5>
        </div>
    </div>
    <div class="row justify-content-between w-50 p-3 m-auto my-3 cardd">
        <div class="col-lg-3 text-center">
            <p>المكتب الهندسي</p>
            <h5>شركة المهندسين</h5>
        </div>
        <div class="col-lg-3 text-center">
            <p>المدينة</p>
            <h5>الطائف</h5>
        </div>
        <div class="col-lg-3 text-center">
            <p>التصنيف</p>
            <h5 class="number">1</h5>
        </div>
    </div>
    -->
    
    <div class="row m-auto justify-content-between p-3 filter-projects my-5" v-motion-pop style="transition: 0.5s;">
        <div class="col-lg-6">
            <p>المدينة</p>
            <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="الرياض" disabled aria-label="Amount (to the nearest dollar)">
           </div>
        </div>
        <div class="col-lg-6">
            <p>التصنيف</p>
            <select v-model="sort.num" @change="sort.sort_rank()" class="form-select" aria-label="Default select example">
                <option selected>الكل</option>
               <option v-for="rank , index in Array.from(new Set(sort.sortNums))" :key="index">{{ rank }}</option>
            </select>
        </div>
        <!--
<div class="col-lg-2 my-auto mb-2 ms-3">
            <img src="../../../assets/magnifier.png" />
        </div>
        -->
        
    </div>
    <div class="row justify-content-between p-3 m-auto my-3 cardd" v-for="office , index in sort.allPartenrs" :key="index" v-motion-slide-right style="transition: 0.5s;">
        <div class="col-lg-3 col-sm-12 text-center">
            <p>المكتب الهندسي</p>
            <h5>{{ office.office }}</h5>
        </div>
        <div class="col-lg-3 text-center">
            <p>المدينة</p>
            <h5>{{ office.city }}</h5>
        </div>
        <div class="col-lg-3 text-center">
            <p>التصنيف</p>
            <h5 class="number">{{ office.num }}</h5>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from "vue";
import EngOfficesHeader from "./EngOfficesHeader.vue";
import { sortOffice } from "@/stores/sortoffice/sortoffice";
const sort = sortOffice();
onMounted(() => {
    sort.allData = sort.allPartenrs;
      sort.collect_sort_num();
      sort.sort_rank();
      });
</script>

<style scoped>
* {
    direction: rtl;
}

.filter-projects {
    border-radius: 10px;
    background: #eefffb;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    width: 40%;
}

.cardd {
    width: 50%;
    border-radius: 10px;
    border: 1px solid#48847B;
    box-shadow: 0px 4px 4px 0px rgba(0.25, 0.25, 0.25, 0.25);
}

.cardd p {
    color: #575757;
}

.cardd h5 {
    font-weight: 700;
}

.number {
    color: #B18718;
}
@media (max-width:650px) {
    .filter-projects{
    width: 60%;
    }
    .cardd{
        width: 75%;
    }
    
}
</style>