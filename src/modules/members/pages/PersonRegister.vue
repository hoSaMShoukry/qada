<template>
  <div>
  <PHeader />
  <div class="container">
    <div class="row my-3">
      <div class="header mb-5">
        <h1>إنشاء حساب </h1>
      </div>
    </div>
    <form class="w-75 m-auto">
      <div class="container">
        <div class="row ">
          <div class="col-md-6 mb-4">
            <i class="fa-solid fa-user mx-2"></i>
            <label for="name">اسم المستخدم</label>
            <input @input="state.userName = sendRegisterData.userName" type="text" class="form-control mt-2" v-model="sendRegisterData.userName" />
            <div class="mt-2" v-if="v$.userName.$error"><span class="text-danger fs-6">{{v$.userName.$errors[0].$message == 'Value is required' ? "رجاء ادخال الاسم " :'' }}</span></div>
          </div>
          <div class="col-md-6 mb-4">
            <i class="fa-solid fa-phone mx-2 mb-1"></i>
            <label for="phone">رقم الهاتف</label>
            <input @input="state.phone = sendRegisterData.phone" type="text" class="form-control mt-2" v-model="sendRegisterData.phone" />
            <div class="mt-2" v-if="v$.phone.$error"><span class="text-danger fs-6">{{v$.phone.$errors[0].$message == 'Value is required' ? "رجاء ادخال رقم الهاتف " :'' }}</span></div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 mb-4">
            <i class="fa-solid fa-lock mx-2"></i>
            <label for="password">كلمة السر</label>
            <input @input="state.password = sendRegisterData.password" type="password" class="form-control mt-2" v-model="sendRegisterData.password" />
            <div class="mt-2" v-if="v$.password.$error"><span class="text-danger fs-6">{{v$.password.$errors[0].$message == 'Value is required' ? "رجاء ادخال  الرقم السرى " :'' }}</span></div>
          </div>
          <div class="col-md-6 mb-4">
            <i class="fa-solid fa-lock mx-2"></i>
            <label for="password">تأكيد كلمة السر</label>
            <input @input="state.confirmPassword = sendRegisterData.confirmPassword" type="password" class="form-control mt-2" v-model="sendRegisterData.confirmPassword" />
            <div class="mt-2" v-if="v$.confirmPassword.$error"><span class="text-danger fs-6">{{v$.confirmPassword.$errors[0].$message == 'Value is required' ? "تأكيد الرقم السرى مطلوب" :'' }}</span></div>

          </div>
        </div>
        <div class="row">
          <div class="col-md-6 mb-4">
            <label for="email">البريد اللإلكتروني</label>
            <input  @input="state.myEmail = sendRegisterData.email" type="text" class="form-control mt-2" v-model="sendRegisterData.email" />
            <div class="mt-2" v-if="v$.myEmail.$error"><span class="text-danger fs-6">{{v$.myEmail.$errors[0].$message == 'Value is required' ? "البريد الالكترونى مطلوب" :'يجب الكتابة على طريقة بريد الكترونى' }}</span></div>
          </div>
        </div>

        <div class="row text-center">
          <router-link class="span" to="/termsandconditions"> قراءة الاحكام والشروط </router-link>
          <div class="border"></div>
          <div class="form-check">
            <label class="checkbox-label">الموافقة علي الشروط والاحكام
              <input v-model="sendRegisterData.terms" required type="checkbox" name="mycheckbox" class="mycheckbox">
            </label>
          </div>
          <div class="">
<!--
            <div class="text-danger" v-if="sendRegisterData.registerd"><span>{{ sendRegisterData.registerd }}</span></div>

-->

            <button @click.prevent="sendRegisterData.registeruserApi() , v$.$validate()" class="btn btn-primary mt-3">
              <span v-if="sendRegisterData.loading == false" class="fs-6">إنشاء</span>
              <div class="d-flex justify-content-center">
                <atom-spinner v-if="sendRegisterData.loading == true" :animation-duration="1000" :size="45" color="#ff1d5e" />

              </div>
            </button>
          </div>
        </div>
      </div>
    </form>
    <div class="my-5 text-center">
      <p class="p1"> لديك حساب بالفعل ؟</p>
      <p class="p2 "> <router-link to="login"> سجل دخولك من هنا </router-link> </p>
    </div>
  </div>
</div>
</template>

<script>
import { onUnmounted, reactive } from 'vue' // "from '@vue/composition-api'" if you are using Vue <2.7
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import { useregister } from "@/stores/register";
import PHeader from "../components/PHeader.vue";
import { AtomSpinner } from 'epic-spinners'
export default {
  components: {
    PHeader,
    AtomSpinner
  },
  name: 'App',
  setup() {
    const state = reactive({
      userName: '',
      phone:'',
      password:'',
      confirmPassword:'',
      myEmail:''
    })
    const rules = {
      userName: { required }, // Matches state.firstName
      phone: { required }, // Matches state.lastName
      password: { required }, // Matches state.lastName
      confirmPassword: { required }, // Matches state.lastName
      myEmail: { required , email}, // Matches state.lastName
    }
    const v$ = useVuelidate(rules, state)
    const sendRegisterData = useregister();
    onUnmounted(() => {
  sendRegisterData.loginName = ''
   sendRegisterData.email='';
   sendRegisterData.password='';
   sendRegisterData.userName='';
   sendRegisterData.confirmPassword='';
   sendRegisterData.loginPassword='';
   sendRegisterData.phone = '';
   sendRegisterData.terms=false;
});
    return {
      sendRegisterData,
      state,
      v$
    };
  },
};
</script>

<style scoped>
* {
  direction: rtl;
}

.header {
  text-align: center;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  font-weight: 700px;
}

h1 {
  color: #0378AE;
  font-weight: 700;
  font-size: 3rem;
}

form .span {
  color: #000000;
  font-size: 2.0rem;
  margin: 0;
  padding: 0;
  text-decoration: none;

}

input {
  /* width: 450px;*/
  height: 55px;
  border-radius: 20px;
}

label {
  /* background-color: #000000; */
  text-align: left;
  color: #0378AE;
}

.fa-solid {
  color: #0378AE;
  font-size: 25px;
  font-weight: 700;
}

.accept {
  color: #303030;
}

.btn {
  width: 200px;
  background-color: #0378AE;
  height: 55px;
  border-radius: 20px;
  border: #0378AE;
  text-align: center;
}

hr {
  border: 1px solid rgba(53, 53, 53, 0.7);
}

.container p {
  display: inline;
}

.p1 {
  color: rgba(0, 0, 0, 0.7);
}

.p2 {
  color: #0378AE;
}

.border {
  width: 25%;
  height: 5px;
  background-color: #0378AE;
  margin: 15px auto;
}

.checkbox-label {
  display: inline-flex;
  align-items: center;
}

.checkbox-label .mycheckbox {
  background-color: #0378AE;
}
@media (max-width:362px) {
    .checkbox-label{
    width: 100vw;
    display: flex;
    justify-content: flex-start;
    }   
}
@media (max-width:321px) {
  .checkbox-label , .btn{
    position: relative;
    left: 20px !important;
  }
  
}
</style>
