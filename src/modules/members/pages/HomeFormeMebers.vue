<template>
      <MainHeader/>
  <div class="home-member">
    <div v-if="getData.data.length > 0">
    <div class="text-center" v-for="collec in getData.data" :key="collec">
           <span class="text-danger fs-1"> {{ collec.thename }}</span>  
    </div>
    </div>
    <div class="container w-100 mt-5">
      <div class="row" v-if="auth == ''">
        <div class="header mt-5">
          <div  v-if="getData.data.length >=0 "
            v-motion-slide-left
       style="transition: 0.5s;"
            >جميع مشاريعك الهندسية تحت</div>
          <div class="mensa mt-3"
          v-motion-slide-left
       style="transition: 0.5s;"
          >منصة واحدة</div>
          <div class="col-lg-4 m-auto mt-5 text-center"
          v-motion-slide-right
       style="transition: 0.5s;"
          >
            <p>
              انشئ مشروعك. قارن عروض الاسعار. تعاقد اونلاين تابع واستلم مخططاتك
              وقيم الخدمة !
            </p>
          </div>
        </div>
        <div v-if="getData.data.length > 0">
    <div class="text-center" v-for="collec in getData.data" :key="collec">
           <span class="text-danger fs-1"> {{ collec.thename }}</span>  
    </div>
    </div>
      </div>
  <!--
    نص متحرك
  -->


      <div style="transition: 1.5s;transition-delay:0.5s ;" class="row-col-6 my-5 add-project" v-motion-slide-bottom>
        <router-link class="linkk" to="/member/addproject">
          <button class="btn add-project-text">اطرح مشروعك الآن</button>
        </router-link>
      </div>
    </div>
    <div class="my-5 mosls" v-if="auth == ''">
      <TriangleDesign />
    </div>

    <div class="container">
      <div class="row my-5" v-if="auth == ''">
        <p class="seconed-subtitle">كيف تعمل منصتنا؟</p>
   
      </div>
      <div class="row align-items-baseline" v-if="auth==''">
        <div class="col test">
          <img src="../../../assets/uploadproject.png" />
          <div class="first-step" v-if="auth == ''">
            <div>1 . اطرح مشروعك</div>
            <div>استقبل عروضك</div>
          </div>
        </div>
        <div class="col test">
          <img src="../../../assets/contract.png" />

          <div class="second-step">
            <div>2 . تعاقد وتابع</div>
            <div>مشروعك أونلاين</div>
          </div>
        </div>
        <div class="col test">
          <img src="../../../assets/Stars.png" />
          <div class="third-step">
            <div>3 . إستلم مشروعك وقيم</div>
            <div>مقدم الخدمة أونلاين</div>
          </div>
        </div>
      </div>
      <div class="row my-5"></div>
      <div :class="x.matches?'justify-content-center row d-flex my-5' : 'justify-content-between row d-flex my-5'">
        <div class="col-10 subtitle_text" :class="x.matches ? 'col-12 text-center' : ''">
          <p class="text-end" :class="x.matches ? 'text-center' : ''">اخر المشاريع المضافة</p>

        </div>
        <div class="col-2 add-new-project"  :class="x.matches ? 'col-12 text-center' : ''">
          <router-link to="/member/addproject">
            <button class="border-none">اضف مشروعك</button>
          </router-link>
        </div>
      </div>

      <!-- comment part search -->
       <div
       v-motion-slide-left
       style="transition: 0.5s;"
        class="row m-auto justify-content-between p-3 w-75 filter-projects my-5"
      >
        <div class="col-md-3">
          <p>المنطقة</p>
          <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="المنطقة الوسطى" disabled aria-label="Amount (to the nearest dollar)">
           </div>
          <!--
            <select @change="filter.filterArea(filteredProjects)" v-model="filter.area" class="form-select my-3" aria-label="Default select example">
            <option selected>المنطقة</option>
            <option>الشمالية</option>
            <option>الشرقية</option>
            <option>الجنوبية</option>
            <option>الغربية</option>
          </select>
          -->
          
        </div>
        <div class="col-md-3">
          <p>المدينة</p>
          <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="الرياض" disabled aria-label="Amount (to the nearest dollar)">
           </div>
          
          <!--
<select v-model="filter.city" @change="filter.filterCity(filteredProjects)" class="form-select" aria-label="Default select example">
            <option selected>الكل</option>
            <option value="جدة">جدة</option>
            <option>مكة</option>
            <option>الرياض</option>
            <option>المدينة</option>
            <option>الطائف</option>
            <option>الدمام</option>
            <option>الرياض</option>
          </select>
          -->
          
        </div>
        <div class="col-md-3">
          <p>التصنيف</p>
          <select v-model="filter.type" @change="filter.filterType(filteredProjects)" class="form-select" aria-label="Default select example">
           <option selected>الكل</option>
            <option>سكني</option>
            <option>تجاري</option>
            <option>سكني</option>
            <option>صناعي</option>
            <option>تعليمي</option>
            <option>طبي</option>
            <option>اخري</option>
          </select>
        </div>
          <!--
        <div class="col-md-1 my-auto mb-2 ms-3">
          <img src="../../../assets/magnifier.png" />
        </div>
            
          -->
      </div> 

      <!-- startCard 
      -->
      <!--start loading-->

      <div class="loading w-100 mt-5 pt-5" v-if="filter.lastFilterd.length == 0">
        <div class="text-center w-100"><span class="fs-5 d-inline-block">جارى الحميل...</span></div>
        <div class="w-100 text-center">
          <span class="d-inline-block">
            <intersecting-circles-spinner :animation-duration="1200" :size="70" color="#ff1d5e"/>
          </span>
        </div>
      </div>
      <!--end loading-->

      <div v-for="project in filter.lastFilterd " :key="project.id" class="w-100 card-link" @click="setproject(project)"
      v-motion-slide-right
       style="transition: 0.5s;"
      >
          <div class="row justify-content-center my-3 text-decoration-none" >
            <div class="col-lg-11 col-md-12 col-sm-12">
              <div class="card rounded-5">
                <div class="row align-items-baseline justify-content-between">
                  <div class="col-8">
                    <div class="card-body">{{ project.project_title }}</div>
                    <div v-if="getData.data.length > 0">
    <div class="text-center" v-for="collec in getData.data" :key="collec">
           <span class="text-danger fs-1"> {{ collec.thename }}</span>  
    </div>
    </div>
                  </div>
                  <div class="col-4 d-flex justify-content-end px-5" v-if="getData.data >=0">
                   <!--
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="29" viewBox="0 0 30 29" fill="none">
                      <path
                        d="M18.561 4.27922L16.8678 2.65092V5V10.1993C11.1713 10.3661 7.3313 11.9802 4.92479 14.8528C2.41212 17.852 1.64722 22.0129 1.64722 26.6471L3.61539 26.8974C4.35801 24.0248 5.76578 21.9134 7.64351 20.5141C9.52539 19.1117 11.9532 18.3697 14.8237 18.3697H16.8678V23.5546V26.0893L18.5984 24.2374L27.7308 14.4653L28.4039 13.7451L27.6933 13.0617L18.561 4.27922Z"
                        stroke="#9F9F9F" stroke-width="2" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="mx-4" width="32" height="28" viewBox="0 0 32 28"
                      fill="none">
                      <path
                        d="M3.29929 3.27199L3.29922 3.27192L3.28952 3.28159C1.89938 4.66765 1 6.56922 1 8.74487C1 10.8914 1.90259 12.787 3.27989 14.1984L3.27982 14.1985L3.28952 14.2081L14.8233 25.7081L15.5294 26.4121L16.2355 25.7081L27.7693 14.2081C29.1594 12.8221 30.0588 10.9205 30.0588 8.74487C30.0588 6.59835 29.1562 4.70273 27.7789 3.29133L27.779 3.29126L27.7693 3.28159C26.3792 1.89554 24.4734 1 22.2941 1C20.1441 1 18.2442 1.89874 16.8287 3.27199L16.8286 3.27192L16.8189 3.28159C16.3163 3.78278 15.8778 4.35136 15.5228 4.97594C15.1717 4.35985 14.7408 3.79478 14.2495 3.29133L14.2496 3.29126L14.2399 3.28159C12.8498 1.89554 10.9439 1 8.76471 1C6.61468 1 4.71483 1.89874 3.29929 3.27199Z"
                        fill="white" stroke="#9F9F9F" stroke-width="2" />
                    </svg>
                   -->
                    
                  </div>
                </div>
                <div class="row my-3">
                  <div class="col-md-3 col-sm-12 d-flex flex-column align-items-center">
                    <div class="card-content">
                      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                        <path
                          d="M13 23.9375C6.96875 23.9375 2.0625 19.0312 2.0625 13C2.0625 6.96875 6.96875 2.0625 13 2.0625C19.0312 2.0625 23.9375 6.96875 23.9375 13C23.9375 19.0312 19.0312 23.9375 13 23.9375ZM13 3.625C7.82812 3.625 3.625 7.82812 3.625 13C3.625 18.1719 7.82812 22.375 13 22.375C18.1719 22.375 22.375 18.1719 22.375 13C22.375 7.82812 18.1719 3.625 13 3.625Z"
                          fill="#48847B" />
                        <path
                          d="M16.125 16.9062C15.9844 16.9062 15.8437 16.875 15.7187 16.7969L11.8125 14.4531C11.6968 14.3836 11.6013 14.285 11.5355 14.1671C11.4697 14.0493 11.4359 13.9162 11.4375 13.7812V7.53125C11.4375 7.09375 11.7812 6.75 12.2187 6.75C12.6562 6.75 13 7.09375 13 7.53125V13.3438L16.5312 15.4531C16.6767 15.5423 16.7891 15.6764 16.8515 15.8352C16.9138 15.994 16.9227 16.1688 16.8768 16.3331C16.8308 16.4974 16.7326 16.6422 16.5969 16.7456C16.4613 16.8491 16.2956 16.9055 16.125 16.9062Z"
                          fill="#48847B" />
                      </svg>
                      <span class="card-content-text mb-1">تاريخ الطرح</span>
                    </div>
                    <div>
                      <span>{{ project.offer_choosing_date }}</span>
                    </div>
                  </div>
                  

                  <div class="col-md-3 col-sm-12 d-flex flex-column align-items-center">
                    <div class="card-content">
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                        <path
                          d="M18.157 5.80402C15.033 2.73102 9.968 2.73102 6.844 5.80402C6.10229 6.52865 5.51291 7.39425 5.11052 8.34993C4.70813 9.3056 4.50084 10.3321 4.50084 11.369C4.50084 12.406 4.70813 13.4324 5.11052 14.3881C5.51291 15.3438 6.10229 16.2094 6.844 16.934L12.5 22.499L18.157 16.934C18.8987 16.2094 19.4881 15.3438 19.8905 14.3881C20.2929 13.4324 20.5002 12.406 20.5002 11.369C20.5002 10.3321 20.2929 9.3056 19.8905 8.34993C19.4881 7.39425 18.8987 6.52865 18.157 5.80402ZM12.5 13.999C11.832 13.999 11.205 13.739 10.732 13.267C10.2638 12.7978 10.0008 12.1619 10.0008 11.499C10.0008 10.8361 10.2638 10.2003 10.732 9.73102C11.204 9.25902 11.832 8.99902 12.5 8.99902C13.168 8.99902 13.796 9.25902 14.268 9.73102C14.7363 10.2003 14.9992 10.8361 14.9992 11.499C14.9992 12.1619 14.7363 12.7978 14.268 13.267C13.796 13.739 13.168 13.999 12.5 13.999Z"
                          fill="#48847B" />
                      </svg>
                      <span class="card-content-text mb-1">الموقع</span>
                    </div>
                    <div>
                      <span>{{ project.city_name }} - {{ project.area }}</span>
                    </div>
                    <div class="card-content">
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                        <path
                          d="M5.5 4.5V10.525V10.5V20.5V4.5ZM7.5 14.5H11C11.15 14.1167 11.3333 13.7583 11.55 13.425C11.7667 13.0917 12.0167 12.7833 12.3 12.5H7.5V14.5ZM7.5 18.5H10.675C10.5917 18.1667 10.5373 17.8333 10.512 17.5C10.4867 17.1667 10.491 16.8333 10.525 16.5H7.5V18.5ZM3.5 22.5V2.5H13.5L19.5 8.5V11C19.1833 10.8667 18.8583 10.7623 18.525 10.687C18.1917 10.6117 17.85 10.5577 17.5 10.525V9.5H12.5V4.5H5.5V20.5H11.525C11.7917 20.9 12.0917 21.271 12.425 21.613C12.7583 21.955 13.125 22.2507 13.525 22.5H3.5ZM17 19.5C17.7 19.5 18.2917 19.2583 18.775 18.775C19.2583 18.2917 19.5 17.7 19.5 17C19.5 16.3 19.2583 15.7083 18.775 15.225C18.2917 14.7417 17.7 14.5 17 14.5C16.3 14.5 15.7083 14.7417 15.225 15.225C14.7417 15.7083 14.5 16.3 14.5 17C14.5 17.7 14.7417 18.2917 15.225 18.775C15.7083 19.2583 16.3 19.5 17 19.5ZM22.1 23.5L19.4 20.8C19.05 21.0333 18.671 21.2083 18.263 21.325C17.855 21.4417 17.434 21.5 17 21.5C15.75 21.5 14.6877 21.0623 13.813 20.187C12.9383 19.3117 12.5007 18.2493 12.5 17C12.5 15.75 12.9377 14.6873 13.813 13.812C14.6883 12.9367 15.7507 12.4993 17 12.5C18.25 12.5 19.3127 12.9377 20.188 13.813C21.0633 14.6883 21.5007 15.7507 21.5 17C21.5 17.4333 21.4417 17.8543 21.325 18.263C21.2083 18.6717 21.0333 19.0507 20.8 19.4L23.5 22.1L22.1 23.5Z"
                          fill="#48847B" />
                      </svg>
                      <span class="card-content-text mb-1 mt-2">الرقم المرجعي</span>
                    </div>
                    <div>
                      <span>{{ project.id }}</span>
                    </div>
                  </div>

                  <div class="col-md-3 col-sm-12 d-flex flex-column align-items-center">
                    <div class="card-content">
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                        <path
                          d="M18.157 5.80402C15.033 2.73102 9.968 2.73102 6.844 5.80402C6.10229 6.52865 5.51291 7.39425 5.11052 8.34993C4.70813 9.3056 4.50084 10.3321 4.50084 11.369C4.50084 12.406 4.70813 13.4324 5.11052 14.3881C5.51291 15.3438 6.10229 16.2094 6.844 16.934L12.5 22.499L18.157 16.934C18.8987 16.2094 19.4881 15.3438 19.8905 14.3881C20.2929 13.4324 20.5002 12.406 20.5002 11.369C20.5002 10.3321 20.2929 9.3056 19.8905 8.34993C19.4881 7.39425 18.8987 6.52865 18.157 5.80402ZM12.5 13.999C11.832 13.999 11.205 13.739 10.732 13.267C10.2638 12.7978 10.0008 12.1619 10.0008 11.499C10.0008 10.8361 10.2638 10.2003 10.732 9.73102C11.204 9.25902 11.832 8.99902 12.5 8.99902C13.168 8.99902 13.796 9.25902 14.268 9.73102C14.7363 10.2003 14.9992 10.8361 14.9992 11.499C14.9992 12.1619 14.7363 12.7978 14.268 13.267C13.796 13.739 13.168 13.999 12.5 13.999Z"
                          fill="#48847B" />
                      </svg>
                      <span class="card-content-text">المدة المقترحة لنهاية المشروع</span>
                    </div>
                    <div>
                      <span>{{ project.project_days_limit }}</span>
                    </div>
                    <div class="card-content">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M5.5 7C5.10218 7 4.72064 6.84196 4.43934 6.56066C4.15804 6.27936 4 5.89782 4 5.5C4 5.10218 4.15804 4.72064 4.43934 4.43934C4.72064 4.15804 5.10218 4 5.5 4C5.89782 4 6.27936 4.15804 6.56066 4.43934C6.84196 4.72064 7 5.10218 7 5.5C7 5.89782 6.84196 6.27936 6.56066 6.56066C6.27936 6.84196 5.89782 7 5.5 7ZM21.41 11.58L12.41 2.58C12.05 2.22 11.55 2 11 2H4C2.89 2 2 2.89 2 4V11C2 11.55 2.22 12.05 2.59 12.41L11.58 21.41C11.95 21.77 12.45 22 13 22C13.55 22 14.05 21.77 14.41 21.41L21.41 14.41C21.78 14.05 22 13.55 22 13C22 12.44 21.77 11.94 21.41 11.58Z"
                          fill="#48847B" />
                      </svg>
                      <span class="card-content-text ">العروض المستلمة</span>
                    </div>
                    <div>
                      <span v-if="project.offers.length == 0">ليس هناك عروض</span>
                      <span v-if="project.offers.length > 0">
                        <span  v-for="myF in project.offers" :key="myF">{{ project.offers.length }}</span>
                      </span>
                       
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-12 d-flex flex-column align-items-center" >
                    <div class="card-content">
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                        <path
                          d="M4.29399 12.53C4.83099 9.842 5.09999 8.5 5.98699 7.6 34C6.15092 7.47444 6.32824 7.32924 6.51699 7.2C7.53999 6.5 8.90999 6.5 11.65 6.5H13.353C16.092 6.5 17.461 6.5 18.483 7.2C18.673 7.33 18.85 7.476 19.013 7.635C19.901 8.5 20.17 9.843 20.707 12.529C21.478 16.385 21.864 18.313 20.976 19.679C20.816 19.927 20.628 20.156 20.416 20.362C19.25 21.5 17.285 21.5 13.353 21.5H11.65C7.71699 21.5 5.75099 21.5 4.58499 20.362C4.37402 20.1557 4.18655 19.9266 4.02599 19.679C3.13799 18.313 3.52399 16.385 4.29599 12.529L4.29399 12.53Z"
                          stroke="#48847B" stroke-width="1.5" />
                        <path
                          d="M15.5 10.5C16.0523 10.5 16.5 10.0523 16.5 9.5C16.5 8.94772 16.0523 8.5 15.5 8.5C14.9477 8.5 14.5 8.94772 14.5 9.5C14.5 10.0523 14.9477 10.5 15.5 10.5Z"
                          fill="#48847B" />
                        <path
                          d="M9.5 10.5C10.0523 10.5 10.5 10.0523 10.5 9.5C10.5 8.94772 10.0523 8.5 9.5 8.5C8.94772 8.5 8.5 8.94772 8.5 9.5C8.5 10.0523 8.94772 10.5 9.5 10.5Z"
                          fill="#48847B" />
                        <path
                          d="M9.5 6.5V5.5C9.5 4.70435 9.81607 3.94129 10.3787 3.37868C10.9413 2.81607 11.7044 2.5 12.5 2.5C13.2956 2.5 14.0587 2.81607 14.6213 3.37868C15.1839 3.94129 15.5 4.70435 15.5 5.5V6.5"
                          stroke="#48847B" stroke-width="1.5" stroke-linecap="round" />
                      </svg>
                      <span class="card-content-text">الخدمة المطلوبة</span>
                    </div>
                    <div>
                      <div class="text-center">
                        <span v-for="myP in project.electronic_service" :key="myP">
                           {{ myP.name }}
                        
                      </span>
                      </div>
                      
                    </div>
                    <div class="card-content">
                      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="25" viewBox="0 0 26 25" fill="none">
                        <path
                          d="M13 23.4375C6.96875 23.4375 2.0625 18.5312 2.0625 12.5C2.0625 6.46875 6.96875 1.5625 13 1.5625C19.0312 1.5625 23.9375 6.46875 23.9375 12.5C23.9375 18.5312 19.0312 23.4375 13 23.4375ZM13 3.125C7.82812 3.125 3.625 7.32812 3.625 12.5C3.625 17.6719 7.82812 21.875 13 21.875C18.1719 21.875 22.375 17.6719 22.375 12.5C22.375 7.32812 18.1719 3.125 13 3.125Z"
                          fill="#48847B" />
                        <path
                          d="M16.125 16.4062C15.9844 16.4062 15.8437 16.375 15.7187 16.2969L11.8125 13.9531C11.6968 13.8836 11.6013 13.785 11.5355 13.6671C11.4697 13.5493 11.4359 13.4162 11.4375 13.2812V7.03125C11.4375 6.59375 11.7812 6.25 12.2187 6.25C12.6562 6.25 13 6.59375 13 7.03125V12.8438L16.5312 14.9531C16.6767 15.0423 16.7891 15.1764 16.8515 15.3352C16.9138 15.494 16.9227 15.6688 16.8768 15.8331C16.8308 15.9974 16.7326 16.1422 16.5969 16.2456C16.4613 16.3491 16.2956 16.4055 16.125 16.4062Z"
                          fill="#48847B" />
                      </svg>
                      <span class="card-content-text">آخر موعد لأستلام عروض الاسعار</span>
                    </div>
                    <div>
                      <span>{{project.last_offers_date}}</span>
                    </div>
                  </div>
                  <!--
 <div class="col-lg-3 col-md-3 col-sm-12 d-flex flex-column align-items-center" style="position: relative;top: -70px;">
                    <svg width="120" height="34" viewBox="0 0 120 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.728 24C4.904 24 3.53 23.67 2.606 23.01C1.682 22.35 1.22 21.342 1.22 19.986C1.22 19.698 1.238 19.392 1.274 19.068C1.322 18.732 1.37 18.408 1.418 18.096C1.478 17.784 1.532 17.514 1.58 17.286C1.628 17.058 1.664 16.896 1.688 16.8L3.326 17.106C3.29 17.298 3.236 17.556 3.164 17.88C3.104 18.204 3.044 18.552 2.984 18.924C2.924 19.296 2.894 19.65 2.894 19.986C2.894 20.586 3.02 21.072 3.272 21.444C3.536 21.816 3.95 22.086 4.514 22.254C5.078 22.422 5.828 22.506 6.764 22.506H11.912V14.982H13.604V24H6.728ZM5.324 15.27V13.524H7.016V15.27H5.324ZM7.79 15.27V13.524H9.482V15.27H7.79ZM16.6412 24V11.148H18.3152V24H16.6412ZM27.7877 24V22.506H29.7317V24H27.7877ZM20.7317 24V22.506H27.3917L26.1137 23.64V19.95C26.1137 19.074 26.0117 18.384 25.8077 17.88C25.6157 17.376 25.2977 17.022 24.8537 16.818C24.4097 16.602 23.8097 16.494 23.0537 16.494H21.5957V14.982H23.0537C24.0497 14.982 24.9017 15.144 25.6097 15.468C26.3177 15.78 26.8577 16.302 27.2297 17.034C27.6017 17.754 27.7877 18.726 27.7877 19.95V24H20.7317ZM29.7317 24V22.506C29.8757 22.506 29.9717 22.572 30.0197 22.704C30.0677 22.836 30.0917 23.016 30.0917 23.244C30.0917 23.472 30.0677 23.658 30.0197 23.802C29.9717 23.934 29.8757 24 29.7317 24ZM29.7324 24V22.506H42.2064L41.1084 23.424V20.364C41.1084 19.26 40.9404 18.36 40.6044 17.664C40.2804 16.968 39.7824 16.458 39.1104 16.134C38.4504 15.798 37.6104 15.63 36.5904 15.63C36.1464 15.63 35.6724 15.654 35.1684 15.702C34.6644 15.738 34.1664 15.792 33.6744 15.864C33.1824 15.924 32.7324 15.984 32.3244 16.044L32.1084 14.838C32.4204 14.754 32.8224 14.658 33.3144 14.55C33.8184 14.43 34.3644 14.328 34.9524 14.244C35.5524 14.16 36.1344 14.118 36.6984 14.118C37.4664 14.118 38.2104 14.22 38.9304 14.424C39.6624 14.628 40.3104 14.97 40.8744 15.45C41.4504 15.918 41.9064 16.554 42.2424 17.358C42.5904 18.162 42.7644 19.164 42.7644 20.364V24H29.7324ZM31.8024 22.506V21.21C31.8024 20.634 31.9464 20.1 32.2344 19.608C32.5224 19.116 32.9184 18.72 33.4224 18.42C33.9384 18.12 34.5084 17.97 35.1324 17.97C35.7684 17.97 36.3324 18.12 36.8244 18.42C37.3284 18.72 37.7244 19.116 38.0124 19.608C38.3004 20.1 38.4444 20.634 38.4444 21.21V22.506H36.8964V21.21C36.8964 20.85 36.8124 20.532 36.6444 20.256C36.4884 19.98 36.2784 19.764 36.0144 19.608C35.7624 19.44 35.4684 19.356 35.1324 19.356C34.8084 19.356 34.5084 19.44 34.2324 19.608C33.9684 19.764 33.7524 19.986 33.5844 20.274C33.4164 20.55 33.3324 20.862 33.3324 21.21V22.506H31.8024ZM29.7324 24C29.5764 24 29.4804 23.934 29.4444 23.802C29.3964 23.658 29.3724 23.472 29.3724 23.244C29.3724 23.016 29.3964 22.836 29.4444 22.704C29.4804 22.572 29.5764 22.506 29.7324 22.506V24ZM47.4598 24V22.506H49.6198V24H47.4598ZM45.7858 24V11.148H47.4598V24H45.7858ZM49.6198 24V22.506C49.7638 22.506 49.8598 22.572 49.9078 22.704C49.9558 22.836 49.9798 23.016 49.9798 23.244C49.9798 23.472 49.9558 23.658 49.9078 23.802C49.8598 23.934 49.7638 24 49.6198 24ZM63.5813 24V22.506H65.5073V24H63.5813ZM59.3873 24C58.9553 24 58.5293 23.922 58.1093 23.766C57.7013 23.598 57.3113 23.34 56.9393 22.992L58.0013 21.876C58.2653 22.092 58.5053 22.254 58.7213 22.362C58.9373 22.458 59.1593 22.506 59.3873 22.506H62.6453L61.9073 23.226V19.014C61.9073 18.798 61.8833 18.498 61.8353 18.114C61.7993 17.718 61.7393 17.274 61.6553 16.782C61.5833 16.278 61.4933 15.768 61.3853 15.252L63.0233 14.982C63.1073 15.414 63.1913 15.888 63.2753 16.404C63.3593 16.92 63.4313 17.412 63.4913 17.88C63.5513 18.348 63.5813 18.726 63.5813 19.014V24H59.3873ZM49.6133 24V22.506H52.2413L51.8273 22.92V16.8H53.5013V24H49.6133ZM53.5013 24V22.506H55.3733C55.7813 22.506 56.0873 22.446 56.2913 22.326C56.4953 22.206 56.6393 21.966 56.7233 21.606C56.8073 21.246 56.8493 20.718 56.8493 20.022V15.9H58.5413V20.022C58.5413 20.994 58.4273 21.774 58.1993 22.362C57.9833 22.95 57.6473 23.37 57.1913 23.622C56.7353 23.874 56.1293 24 55.3733 24H53.5013ZM49.6133 24C49.4573 24 49.3613 23.934 49.3253 23.802C49.2773 23.658 49.2533 23.472 49.2533 23.244C49.2533 23.016 49.2773 22.836 49.3253 22.704C49.3613 22.572 49.4573 22.506 49.6133 22.506V24ZM65.5073 24V22.506C65.6633 22.506 65.7593 22.572 65.7953 22.704C65.8433 22.836 65.8673 23.016 65.8673 23.244C65.8673 23.472 65.8433 23.658 65.7953 23.802C65.7593 23.934 65.6633 24 65.5073 24ZM56.9393 10.878V9.276H58.4513V10.878H56.9393ZM55.5173 13.362V11.616H57.1733V13.362H55.5173ZM58.1993 13.362V11.616H59.8553V13.362H58.1993ZM75.8359 24V22.506H77.7619V24H75.8359ZM65.5039 24V22.506H75.2059L74.1439 23.298V19.572C74.1439 18.78 74.0539 18.162 73.8739 17.718C73.7059 17.274 73.4059 16.956 72.9739 16.764C72.5419 16.572 71.9539 16.476 71.2099 16.476C70.7059 16.476 70.2079 16.512 69.7159 16.584C69.2239 16.656 68.8399 16.752 68.5639 16.872L69.5899 15.864C69.5179 16.14 69.4459 16.494 69.3739 16.926C69.3019 17.358 69.2419 17.826 69.1939 18.33C69.1459 18.822 69.1219 19.314 69.1219 19.806C69.1219 20.298 69.1459 20.784 69.1939 21.264C69.2419 21.744 69.2959 22.164 69.3559 22.524C69.4159 22.884 69.4639 23.13 69.4999 23.262L67.8979 23.712C67.8499 23.556 67.7899 23.286 67.7179 22.902C67.6579 22.518 67.5979 22.056 67.5379 21.516C67.4899 20.976 67.4659 20.406 67.4659 19.806C67.4659 19.218 67.4899 18.648 67.5379 18.096C67.5979 17.532 67.6639 17.022 67.7359 16.566C67.8199 16.11 67.8979 15.744 67.9699 15.468C68.2459 15.36 68.6719 15.252 69.2479 15.144C69.8359 15.036 70.4899 14.982 71.2099 14.982C72.2299 14.982 73.0819 15.132 73.7659 15.432C74.4619 15.732 74.9779 16.218 75.3139 16.89C75.6619 17.55 75.8359 18.444 75.8359 19.572V24H65.5039ZM65.5039 24C65.3479 24 65.2519 23.934 65.2159 23.802C65.1679 23.658 65.1439 23.472 65.1439 23.244C65.1439 23.016 65.1679 22.836 65.2159 22.704C65.2519 22.572 65.3479 22.506 65.5039 22.506V24ZM77.7619 24V22.506C77.9179 22.506 78.0139 22.572 78.0499 22.704C78.0979 22.836 78.1219 23.016 78.1219 23.244C78.1219 23.472 78.0979 23.658 78.0499 23.802C78.0139 23.934 77.9179 24 77.7619 24ZM79.8979 24V11.148H81.5719V24H79.8979ZM77.7559 24V22.506H79.8979V24H77.7559ZM77.7559 24C77.5999 24 77.5039 23.934 77.4679 23.802C77.4199 23.658 77.3959 23.472 77.3959 23.244C77.3959 23.016 77.4199 22.836 77.4679 22.704C77.5039 22.572 77.5999 22.506 77.7559 22.506V24ZM84.6158 24V11.148H86.2898V24H84.6158Z" fill="black" fill-opacity="0.5"/>
                    <g clip-path="url(#clip0_4922_125)">
                    <path d="M107.5 26C102.5 26 96.5 21 96.5 17C96.5 13 102.5 8 107.5 8C112.5 8 118.5 13 118.5 17C118.5 21 112.5 26 107.5 26ZM107.5 12C106.174 12 104.902 12.5268 103.964 13.4645C103.027 14.4021 102.5 15.6739 102.5 17C102.5 18.3261 103.027 19.5979 103.964 20.5355C104.902 21.4732 106.174 22 107.5 22C108.826 22 110.098 21.4732 111.036 20.5355C111.973 19.5979 112.5 18.3261 112.5 17C112.5 15.6739 111.973 14.4021 111.036 13.4645C110.098 12.5268 108.826 12 107.5 12Z" stroke="#48847B" stroke-width="2"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_4922_125">
                    <rect width="24" height="24" fill="white" transform="translate(95.5 5)"/>
                    </clipPath>
                    </defs>
                    </svg>
                   <div><span class="fs-5">500</span></div>
                  </div>
                  -->
                 
                </div>
              </div>
            </div>
          </div>
      </div>




    </div>
  </div>
</template>

<script>
import { IntersectingCirclesSpinner } from 'epic-spinners'
import {addData} from '@/stores/addData';
import { electronicService } from '@/stores/getElectronic-service';
import {  computed, onMounted, ref } from 'vue';
import TriangleDesign from "./Tabs/TriangleDesign.vue";
import MainHeader from "../../../components/Main_Header.vue";
import {filterProject} from '@/stores/filterProjects'
//import globalService from '../../../services/globalservice';
import axios from 'axios';
import router from '@/router';
import { redirectAuth } from '@/stores/redirectAuth/redirect';
export default {
  components: {
    TriangleDesign,
    MainHeader,
    IntersectingCirclesSpinner
  },
  setup() {
    const redirect = redirectAuth(); 
    const filter = filterProject();
    const auth = ref(null);
    const getData = addData();
    const notifications = computed(()=>{
     return allProjects.value.filter((project)=>{return project.state == 0})
    });
    let filteredProjects = computed(()=>{
      return allProjects.value.filter((project)=> {return project.state == 1})
    });
    const x = ref(window.matchMedia("(max-width: 620px)"));
    const getElectronicService = electronicService();
    const allProjects = ref([]);
    const setproject = (project)=>{
      localStorage.setItem('offers' , JSON.stringify(project.offers));
      localStorage.setItem('project' , JSON.stringify(project));
      localStorage.setItem('stages' , project.offers.length > 0 ? JSON.stringify(project.offers[0].stages) : '');
      localStorage.setItem('p-comments' , JSON.stringify(project.comments))
      router.push({name: 'maintabsForMember', params: { id: project.id }})
    }
   
    const getAllProjects =async () => {
     await axios.get('https://test.m-aboelela.online/api/welcome')
        .then((res) => {
          allProjects.value = res.data.data;
         console.log((res.data.data));
        })
        .catch((error) => {
          console.error(error);
        });
    };
    

    onMounted(async() => {
     await redirect.redirectToMain();
      await getAllProjects();
      getData.getData();
      console.log(filter.type);
     filter.filterType(filteredProjects.value)
     // filter.filterArea(filteredProjects.value)
      //filter.filterType(filteredProjects.value)
    if(localStorage.getItem('token')){
      auth.value = localStorage.getItem('token');
      console.log(auth.value);
    }else{
      auth.value = ''
    }

     
    });
    return {
      x,
      getData,
      notifications,
      filter,
      getElectronicService,
      auth,
      allProjects,
      getAllProjects,
      setproject,
      filteredProjects,
      
    };
  },
  
};
</script>



<style scoped>
* {
  direction: rtl;
}
.home-member{
  min-height: 100vh;
  max-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
}

.header {
  text-align: center;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  font-weight: 600px;
}

.header .mensa {
  color: #48847b;
  margin: 0;
  padding: 0;
}

.test {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.test img {
  margin-bottom: 20px;
}

.add-project button {
  display: flex;
  margin: auto;
  justify-content: center;
  border-radius: 20px;
  border: 3px solid #48847b;
  padding: 10px 50px;
  color: #48847b;
  font-weight: 600;
}

.linkk {
  text-decoration: none;
}

.add-project button :hover {
  transition: all 300ms ease-out;
  border-radius: 20px;
  border: 3px solid #272627;
  padding: 10px 50px;
  background-color: white;
}

.add-project-text {
  color: #272627;
  font-size: 20px;
  text-align: center;
}

.header p {
  font-size: 20px;
  font-weight: 400;
  line-height: 37px;
  letter-spacing: 0em;
  text-align: center;
}

.mosls {
  height: 370px;
}

.subtitle_text {
  color: #000;
  font-size: 35px;
  font-weight: 600;
}

.steps col {
  background-color: #7159a5;
}

.seconed-subtitle {
  color: #259f5a;
  font-size: 2.2rem;
  font-weight: 900;
  text-decoration: underline;
  text-decoration-color: #ffb800;
}

.first-step {
  padding: 10px;
  border-radius: 41px;
  width: 50%;
  margin: auto;
  border: 1px solid #0c483f;
  background: #fff;
  box-shadow: 6px 8px #0c483f;
  text-align: center;
}

.second-step {
  padding: 10px;
  border-radius: 41px;
  width: 50%;
  margin: auto;
  border: 1px solid #ffb800;
  background: #fff;
  box-shadow: 6px 8px #ffb800;
  text-align: center;
}

.third-step {
  padding: 10px;
  border-radius: 41px;
  width: 50%;
  margin: auto;
  border: 1px solid #7159a5;
  background: #fff;
  box-shadow: 6px 8px #7159a5;
  text-align: center;
}

.add-new-project button {
  border-radius: 20px;
  background: #48847b;
  flex-shrink: 0;
  padding: 10px 20px;
  color: #fff;
  font-size: 1.25rem;
  border: none;
}

.filter-projects {
  border-radius: 10px;
  background: #eefffb;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.card-body {
  color: #48847b;
  text-align: right;
  font-size: 24px;
  font-weight: 600;
}

.card-content {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.card-content-text {
  color: rgba(0, 0, 0, 0.5);
}

.card:hover {
  border: 5px solid #48847b;
}

.card-link {
  text-decoration: none;
  /* Removes underline */
  color: inherit;
  cursor: pointer;
}

@media (max-width: 576px) {
  .subtitle_text {
    color: #000;
    font-size: 20px;
    font-weight: 400;
    margin-top: 0.75rem;
  }

  .add-new-project button {
    border-radius: 20px;
    background: #48847b;
    padding: 10px 20px;
    color: #fff;
    font-size: 1.25rem;
    border: none;
    margin-bottom: 0.5rem;
  }

  .card-body {
    color: #48847b;
    text-align: right;
    font-size: 18px;
    font-weight: 400;
    white-space: nowrap;
  }
}
</style>
