import axios from 'axios';
import {defineStore} from 'pinia';

export const getAllProjctsForOne = defineStore('projects' , {
    state:()=>({
        allProjects:[],
        projectId:null
    }),
    actions:{
      async getprojects(api){
        this.projectId = localStorage.getItem('id');
           await axios.get(api,{
        
           })
           .then((res)=>{
            if(res.status == 200){
                console.log('memeber projects');
                 this.allProjects = res.data.data.filter((project)=> project.user_id == this.projectId);
                 console.log(this.projectId);
                 console.log(this.allProjects);
            }
           }).catch((error)=> console.log(error));
        }
    }
    
})