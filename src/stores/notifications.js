import axios from "axios";
import { defineStore } from "pinia";

export const notify = defineStore('notify' , {
    state:()=>({
     allprojects:[],
     underVision:[],
     rejected:[],
     accepted:[]
    }),
    actions:{
        async getAllProjects(){
            await axios.get('https://test.m-aboelela.online/api/welcome')
            .then((res) => {
                if(res.status == 200){
                    this.allprojects = res.data.data
                    this.underVision = this.allprojects.filter((project)=> project.state == 0);
                    this.accepted = this.allprojects.filter((project)=> project.state == 1);
                    this.rejected = this.allprojects.filter((project)=> project.state == 2);
                    console.log(res.data);
                }
                
            })
            .catch((error) => {
              console.error(error);
            });

        }
    }
})