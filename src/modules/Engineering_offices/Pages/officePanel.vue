<template>
            <EngOfficesHeader/>
    <div class="officePanel">
        <div class="row contain">
            <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-12">
              <div class="sideCard" style="transition: 1s;" v-motion-slide-right>
                    <ul>
                        <li class="text-light">مرحبا</li>
                        <li class="authName">{{ personName }}</li>
                        <!--التوجه لصفحة حسابى
                        to="usersStats"
                        -->
                        <li @click="showComponent = 'حسابى'" class="mt-4 sidbarLink" :style="{'cursor': 'pointer' , 'textDecoration' : showComponent == 'حسابى' ? 'underline' : ''}">حسابى</li>
                        <li class="mt-4 sidbarLink" @click="showComponent = 'المراسلات'" :style="{'cursor': 'pointer' , 'textDecoration' : showComponent == 'المراسلات' ? 'underline' : ''}">المراسلات</li>
                        <li @click="logOut" class="mt-4"><router-link class="sidbarLink" to="">تسجيل خروج</router-link></li>
                    </ul>
                    </div>
                    </div>
           
            <!--container-->
            <div class="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12">
                <EngOfficeAccount v-if="showComponent == 'حسابى'"/>
                <chatOffice v-if="showComponent == 'المراسلات'"/>
            </div>
          </div>        
    </div>
</template>

<script setup>
import { ref } from 'vue';
import EngOfficeAccount from '@/modules/Engineering_offices/Pages/EngOfficeAccount.vue'
import chatOffice from './chatOffice.vue';

import EngOfficesHeader from '../components/EngOfficesHeader.vue';
import router from '@/router';
const logOut = ()=>{
    localStorage.clear();
    router.push('/')
}
const personName = ref( 
  localStorage.getItem('email') ?
  localStorage.getItem('email').slice(0,localStorage.getItem('email').indexOf('@'))
   : ''
  );
  let showComponent = ref('حسابى');
</script>

<style scoped>
.officePanel{
    min-height: 100vh;
    max-width: 100% !important;
    overflow-x: hidden;
    position: relative;
    top: -50px;
    direction: rtl;
}
.sideCard {
    position: absolute;
    top: 0px;
    right: 0;
    background-color: #54847D;
    color: #fff;
    width: 170px;
    height: 330px;
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
@media (max-width:768px) {
  .contain{
    display: block !important;
    margin-top: 50vh !important;
    min-width: 100% !important;
  max-height: fit-content;
  }
}

</style>