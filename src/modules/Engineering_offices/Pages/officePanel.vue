<template>
            <EngOfficesHeader/>
    <div class="officePanel">
        <div class="row contain">
          <!--
            <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-12">
              <div class="sideCard" style="transition: 1s;" v-motion-slide-right>
                    <ul>
                        <li class="text-light">مرحبا</li>
                        <li class="authName">{{ personName }}</li>
    
                        <li @click="showComponent = 'حسابى'" class="mt-4 sidbarLink" :style="{'cursor': 'pointer' , 'textDecoration' : showComponent == 'حسابى' ? 'underline' : ''}">حسابى</li>
                        <li class="mt-4 sidbarLink" @click="showComponent = 'المراسلات'" :style="{'cursor': 'pointer' , 'textDecoration' : showComponent == 'المراسلات' ? 'underline' : ''}">المراسلات</li>
                        <li @click="logOut" class="mt-4"><router-link class="sidbarLink" to="">تسجيل خروج</router-link></li>
                    </ul>
                    </div>
                    </div>  
          -->
            <!--container-->
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div id="sidebar" class="sideCard" style="transition: 1s;">
                    <ul>
                      <span @click="show_sidebar()" class="icon"><i class="fa-solid fa-gear"></i></span>
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
                <EngOfficeAccount v-if="showComponent == 'حسابى'"/>
                <chatOffice v-if="showComponent == 'المراسلات'"/>
            </div>
          </div>        
    </div>
</template>

<script setup>
import { ref , onMounted } from 'vue';
import EngOfficeAccount from '@/modules/Engineering_offices/Pages/EngOfficeAccount.vue'
import chatOffice from './chatOffice.vue';
import { notify } from '@/stores/notifications';
import EngOfficesHeader from '../components/EngOfficesHeader.vue';
import router from '@/router';
import { redirectAuth } from '@/stores/redirectAuth/redirect';
const notifications = notify()
const redirect = redirectAuth();
const show_sidebar = ()=>{
      document.querySelector('#sidebar').classList.toggle('gear');
    }
onMounted(async()=>{
await redirect.redirectToControlPanel();
})
const logOut = ()=>{
  if(localStorage.getItem(`notifications${notifications.userId}`) ||  localStorage.getItem(`office_notifications${notifications.userId}`)){
    localStorage.removeItem('email');
    localStorage.removeItem('name');
    localStorage.removeItem('type');
    localStorage.removeItem('token');
    localStorage.removeItem('phone');
    localStorage.removeItem('id');
    router.push('/loginPanal')

  }else{
  localStorage.clear();
  router.push('/loginPanal')
  }
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
  z-index: 1000;
    position: absolute;
    top: 0px;
    right: -170px;
    background-color: #54847D;
    color: #fff;
    width: 170px;
    height: 330px;
    text-align: center;
    border-radius: 22px 0 0 22px;
    padding-top: 20px;
    transition: 1s;
}
.sideCard.gear{
  position: absolute;
    top: 0px;
    right: 0px;
    background-color: #54847D;
    color: #fff;
    width: 170px;
    height: 330px;
    text-align: center;
    border-radius: 22px 0 0 22px;
    padding-top: 20px;
    transition: 1s;
}
.sideCard .icon{
    cursor: pointer;
  position: absolute;
  left: -30px;
  top: 40%;
  font-size: 30px;
  color: #0c483f;
  animation-name: rotate;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
@keyframes rotate {
  from{
    transform: rotate(180deg);
  }
to{
  transition: rotate(180deg);
}
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
    min-width: 100% !important;
    max-height: fit-content;
  }
}

</style>