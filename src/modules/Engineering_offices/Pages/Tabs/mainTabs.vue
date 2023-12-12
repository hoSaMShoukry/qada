<template>
  <div>
  <BusinessHeader />
  <div class="mt-5">
    <ul class="nav" id="myTab" role="tablist" style="position: sticky; top: 0;background-color: #fff;z-index: 999;">
      <li class="nav-item" role="presentation" @click="activeTab = '1'">
        <a
          class="nav-link"
          :class="{ active: activeTab === '1' }"
          href="#header-i"
          role="tab"
          aria-controls="header-i"
          aria-selected="true"
        >
          تفاصيل المشروع
        </a>
      </li>
      <li class="nav-item" role="presentation" @click="activeTab = '2'">
        <a
          class="nav-link"
          :class="{ active: activeTab === '2' }"
          href="#header-ii"
          role="tab"
          aria-controls="header-ii"
          aria-selected="false"
        >
          الإستفسارات
        </a>
      </li>
      <li class="nav-item" role="presentation" @click="activeTab = '3'">
        <a
          class="nav-link"
          :class="{ active: activeTab === '3' }"
          href="#header-iii"
          role="tab"
          aria-controls="header-iii"
          aria-selected="false"
        >
          ملفات المشروع
        </a>
      </li>
      <li class="nav-item" role="presentation" @click="activeTab = '4'">
        <a
          class="nav-link"
          :class="{ active: activeTab === '4' }"
          href="#header-iv"
          role="tab"
          aria-controls="header-iv"
          aria-selected="false"
        >
          عروض الاسعار
        </a>
      </li>
      <li class="nav-item" role="presentation" @click="activeTab = '5'">
        <a
          class="nav-link"
          :class="{ active: activeTab === '5' }"
          href="#header-v"
          role="tab"
          aria-controls="header-v"
          aria-selected="false"
        >
          تعاقد إلكتروني
        </a>
      </li>
      <li class="nav-item" role="presentation" @click="activeTab = '6'">
        <a
          class="nav-link"
          :class="{ active: activeTab === '6' }"
          href="#header-vi"
          role="tab"
          aria-controls="header-vi"
          aria-selected="false"
        >
          مراحل المشروع
        </a>
      </li>
      <li class="nav-item" role="presentation" @click="activeTab = '8'">
        <a
          class="nav-link"
          :class="{ 'active': activeTab === '8' }"
          href="#header-viii"
          role="tab"
          aria-controls="header-viii"
          aria-selected="false"
        >
        المراسلات
      </a>
      </li>
    </ul>

    <!-- Content panes for each tab -->
    <div class="tab-content mt-2" id="myTabContent">
      <!-- Content for tab 1 goes here -->
      <div
        class="tab-pane fade"
        :class="{ 'show active': activeTab === '1' }"
        id="header-i"
        role="tabpanel"
        aria-labelledby="header-i-tab"
      >
        <ProjectDetails></ProjectDetails>
      </div>
      <!-- Content for tab 2 goes here -->
      <div
        class="tab-pane fade"
        :class="{ 'show active': activeTab === '2' }"
        id="header-ii"
        role="tabpanel"
        aria-labelledby="header-ii-tab"
      >
        <ProjectQuereries></ProjectQuereries>
      </div>
      <!-- Content for tab 3 goes here -->
      <div
        class="tab-pane fade"
        :class="{ 'show active': activeTab === '3' }"
        id="header-iii"
        role="tabpanel"
        aria-labelledby="header-iii-tab"
      >
        <projectsFile></projectsFile>
      </div>
      <!-- Content for tab 4 goes here -->
      <div
        class="tab-pane fade"
        :class="{ 'show active': activeTab === '4' }"
        id="header-iv"
        role="tabpanel"
        aria-labelledby="header-iv-tab"
      >
        <Prices_offers></Prices_offers>
      </div>
      <!-- Content for tab 5 goes here -->
      <div
        class="tab-pane fade"
        :class="{ 'show active': activeTab === '5' }"
        id="header-v"
        role="tabpanel"
        aria-labelledby="header-v-tab"
      >
        <ElectronicContract></ElectronicContract>
      </div>
      <!-- Content for tab 6 goes here -->
      <div
        class="tab-pane fade"
        :class="{ 'show active': activeTab === '6' }"
        id="header-vi"
        role="tabpanel"
        aria-labelledby="header-vi-tab"
      >
        <ProjectPhases></ProjectPhases>
      </div>
      <!-- Content for tab 7 goes here -->
      <div
        class="tab-pane fade"
        :class="{ 'show active': activeTab === '7' }"
        id="header-vii"
        role="tabpanel"
        aria-labelledby="header-vii-tab"
      >
        <project-transactions></project-transactions>
      </div>
      <div
        class="tab-pane fade"
        :class="{ 'show active': activeTab === '8' }"
        id="header-viii"
        role="tabpanel"
        aria-labelledby="header-vii-tab"
      >
     <ChatOffice></ChatOffice>
    </div>
    </div>
  </div>
</div>
</template>

<script>
import BusinessHeader from "../../components/EngOfficesHeader.vue";
import ProjectDetails from "./projectDetails";
import ProjectPhases from "./projectPhases";
import ElectronicContract from "./ElectronicContract.vue";
import ProjectQuereries from "./projectQuereries.vue";
import projectTransactions from "./projectTransactions.vue";
import projectsFile from "./projectsFile.vue";
import Prices_offers from "./Prices_offers.vue";
import { onMounted, onUnmounted, ref } from "vue";
import globalService from "@/services/globalservice";
import { useRoute } from "vue-router";
import ChatOffice from "../chatOffice.vue";
export default {
  components: {
    ProjectDetails,
    Prices_offers,
    ProjectPhases,
    ElectronicContract,
    projectsFile,
    projectTransactions,
    ProjectQuereries,
    BusinessHeader,
    ChatOffice
},
  setup() {
    const activeTab = ref("1");

    const changeTab = (tabNumber) => {
      activeTab.value = tabNumber;
    };
    const route = useRoute();
    const project_id = route.params.id;
    const project = ref({});
    const user_id = localStorage.getItem("id");
    const getAllComments = () => {
  globalService.getAllProjectForlandingpage()
    .then((res) => {
      console.log("API Response:", res.data); // Log the entire API response
       res.data.data.find((project) => project.id === project_id);
      console.log("Requested Project ID:", project_id); // Log the requested project ID
      const filterproject = res.data.data.filter((project) => project.id == project_id);
      console.log(filterproject);
      project.value = filterproject[0]; 
      console.log("project =>" + " ");
      console.log(project.value); 
     
    })
    .catch((error) => {
      console.error(error);
    });
};
onUnmounted(() => {
  localStorage.removeItem('offers');
  localStorage.removeItem('project');
  localStorage.removeItem('stages');
  localStorage.removeItem('p-comments');
  window.location.reload();

});
onMounted(() => {
  getAllComments();
});
    return {
      user_id,
      getAllComments,
      project,
      activeTab,
      changeTab,
    };
  },
};
</script>

<style scoped>
* {
  direction: rtl;
}
.nav-link {
  color: rgba(85, 85, 85, 0.9);
  font-family: Cairo;
  font-size: 25px;
  font-weight: 600;
  font-style: normal;
  line-height: normal;
}
.nav-link:hover {
  color: rgba(85, 85, 85, 0.9);
}
.nav-link.active {
  color: #B18718;

    
  border-bottom:5px solid #B18718  ;
}
@media (max-width: 576px) {
  .nav-link {
    color: rgba(85, 85, 85, 0.9);
    font-family: Cairo;
    font-size: 15px;
    font-weight: 300;
    font-style: normal;
    line-height: normal;
  }
  
}
</style>
