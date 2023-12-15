<template >
    <div class="nada">
        <div class="all">
            <div class="row">
                <div class="col-lg-12">
                    <form @submit.prevent="login" class="p-5">
                        <div class="">
                            <div class="row formContainer m-auto py-5 rounded-5 w-75">
                                <div class="col-xl-7 col-lg-7 col-md-10 col-sm-10 col-12 m-auto ">
                                    <i class="fa-solid fa-user mx-2 text"></i>
                                    <label class="text" for="email">اسم العميل</label>
                                    <input class="form-control mt-2  " v-model.trim="name" />
                                </div>
                                <div class="col-xl-7 col-lg-7 col-md-10 col-sm-10 col-12 m-auto">
                                    <i class="fa-solid fa-envelope mx-2 text"></i>
                                    <label class="text" for="email">البريد الإلكتروني</label>
                                    <input class="form-control mt-2 " v-model.trim="name" />
                                </div>
                                <div class="col-xl-7 col-lg-7 col-md-10 col-sm-10 col-12 m-auto">
                                    <i class="fa-solid fa-phone mx-2 text"></i>
                                    <label class="text" for="email">رقم الهاتف</label>
                                    <input class="form-control mt-2 " v-model.trim="name" />
                                </div>
                                <div class="col-xl-7 col-lg-7 col-md-10 col-sm-10 col-12 m-auto ">
                                    <i class="fa-solid fa-lock mx-2 text"></i>
                                    <label class="text" for="email">كلمة المرور الجديدة</label>
                                    <input class="form-control mt-2 " v-model.trim="name" />
                                </div>
                                <div class="col-xl-7 col-lg-7 col-md-10 col-sm-10 col-12 m-auto">
                                    <i class="fa-solid fa-lock mx-2 text"></i>
                                    <label class="text" for="email">تأكيد كلمة المرور</label>
                                    <input class="form-control mt-2 " v-model.trim="name" />
                                </div>
                                <div class="text-center my-2">
                                    <button type="submit" class="btnn">حفظ التغييرات</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
* {
    direction: rtl;
}

/* .nada {
    background: #59467C;
} */
/* .sideCard {
    position: absolute;
    top: 45%;
    background: linear-gradient(301.09deg, #59467C 30.12%, #000000 173.77%);
    color: #fff;
    width: 150px;
    text-align: center;
    border-radius: 18px 0 0 18px;
} */
.container {
    margin: 0;
}

.sideCard {
    background-color: #59467C;
    color: #fff;
    width: 170px;
    height: 461px;
    text-align: center;
    border-radius: 18px 0 0 18px;
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

li {
    list-style-type: none;
    color: #fff;
    font-size: 20px;
    font-weight: 500;
}

.secondLink {
    color: #fff;
    text-decoration-line: underline;
}

.formContainer {
    background-color: #fff;
    border-radius: 10px;
}

.text {
    color: #9E5488;
}

input {
    border: 0.1rem solid #9E5488;
    border-radius: 20px;
    margin-bottom: 3rem;
    height: 50px;
}

.btnn {
    color: #FFFFFF;
    background-color: #9E5488;
    width: 10rem;
    height: 3rem;
    margin-bottom: 3rem;
    border-radius: 0.6rem;
    border: none;
}
@media (max-width:950px) {
    .formContainer{
        width: 100% !important;
    }
    
}
</style>