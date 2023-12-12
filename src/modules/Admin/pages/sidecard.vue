<template>
    <div class="col-lg-3 sideCard">
                <ul>
                    <li class="text-light">مرحبا</li>
                    <li class="authName">عبدالعزيز</li>
                    <li class="mt-4"><router-link class="sidbarLink" to="homepage">الرئيسية</router-link></li>
                    <li class="mt-4"><router-link class="sidbarLink" to="usersStats">الاحصائيات</router-link></li>
                    <li class="mt-4"><router-link class="sidbarLink" to="useraccount">الفريق</router-link></li>
                    <li class="mt-4"><router-link class="sidbarLink" to="addedProjects">المشاريع</router-link></li>
                    <li class="mt-4"><router-link class="sidbarLink" to="">تسجيل خروج</router-link></li>
                </ul>
            </div>
</template>

<script>
    export default {
        name:'sideCard'
        
    }
</script>

<style lang="css" scoped>
.sideCard {
    background-color: #59467C;
    color: #fff;
    width: 170px;
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

.header-title {
    color: #E4E4E4;
    text-align: right;
    font-family: Cairo;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}
</style>