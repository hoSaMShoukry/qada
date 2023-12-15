<template>
       <div id="sidebar" class="sideCard" style="transition: 1s;">
                    <ul>
                      <span @click="show_sidebar(), $emit('showComp' , showComponent)" class="icon"><i class="fa-solid fa-gear"></i></span>
                      <li class="text-light">مرحبا</li>
                        <li class="authName">{{ personName }}</li>
                        <li class="mt-4" @click="showComponent = 'الرئيسية',$emit('showComp' , showComponent)" :style="{'cursor': 'pointer' , 'textDecoration' : showComponent == 'الرئيسية' ? 'underline' : ''}">الرئيسية</li>
                        <li class="mt-4" @click="showComponent = 'الاحصائيات',$emit('showComp' , showComponent)" :style="{'cursor': 'pointer' , 'textDecoration' : showComponent == 'الاحصائيات' ? 'underline' : ''}">الاحصائيات</li>
                        <li @click="showComponent = 'الفريق',$emit('showComp' , showComponent)" class="mt-4 sidbarLink" :style="{'cursor': 'pointer' , 'textDecoration' : showComponent == 'الفريق' ? 'underline' : ''}">الفريق</li>
                        <li @click="showComponent = 'المشاريع',$emit('showComp' , showComponent)" class="mt-4 sidbarLink" :style="{'cursor': 'pointer' , 'textDecoration' : showComponent == 'المشاريع' ? 'underline' : ''}">المشاريع</li>
                        <li @click="logOut" class="mt-4"><router-link class="sidbarLink" to="">تسجيل خروج</router-link></li>
                    </ul>
                    </div>
</template>

<script setup>
import router from '@/router';
import { notify } from '@/stores/notifications';
import {ref } from 'vue';
let showComponent = ref('الرئيسية');
const show_sidebar = ()=>{
      document.querySelector('#sidebar').classList.toggle('gear');
    }
    const notifications = notify();
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
  
</script>

<style scoped>
.sideCard {
    position: absolute;
    top: 0px;
    right: -170px;
    z-index: 1000;
    background-color: #59467C !important;
    color: #fff;
    width: 170px;
    height: 380px;
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
  .sideCard .icon{
    cursor: pointer;
  position: absolute;
  left: -30px;
  top: 40%;
  font-size: 30px;
  color: #7e2403;
  text-shadow: 1px 1px 10px orange;
  animation-name: rotate;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-direction: alternate;
  animation-delay: 0ms;
}
@keyframes rotate {
  from{
    transform: rotate(360deg);
  }
to{
  transition: rotate(360deg);
}
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


</style>