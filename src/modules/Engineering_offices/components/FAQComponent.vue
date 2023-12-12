<template>
    <EngOfficesHeader />
    <div class="container" v-motion-slide-top style="transition: 0.5s;">
        <div class="row justify-content-center" v-for="question , index in faqData.data" :key="index">
            <div class="col-10 what">
                <p>{{ question.question }}</p>
                <p class="collapse" :id="`collapseExample${index}`">{{ question.answer }}</p>
            </div>
            <div class="col-2">
                <a data-toggle="collapse" :href="`#collapseExample${index}`" role="button" aria-expanded="false" aria-controls="collapseExample"><i class="fa-light fa fa-circle-arrow-down"></i></a>
            </div>
        </div>
        
    </div>
</template>

<script setup>
import { onMounted } from "vue";
import EngOfficesHeader from "./EngOfficesHeader.vue"
import { apis } from "@/stores/termsAndQuestionsApis/apis";
const faqData = apis();
   onMounted(() => {
   faqData.getWithoutAuth('https://test.m-aboelela.online/api/questions');
   });
</script>

<style scoped>
* {
    direction: rtl;
}

.container {
    margin-bottom: 5rem;
    margin-top: 5rem;
    min-height: 51vh;

}

.container p {
    margin-bottom: 1rem;
    font-size: 1rem;
    font-weight: 600;
}
.what{
    width: 25%;
}
@media (max-width:992px) {
    .what{
        width: 50%;
    }
    
}
@media (max-width:768px) {

    .what{
        width: 70%;
    }
}
@media (max-width:450px) {
    .what{
        width: 80%;
    }
    
}
@media (max-width:300px) {
    .what{
        width: 82%;
    }
    
}
</style>