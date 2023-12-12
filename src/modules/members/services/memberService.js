import axios from "axios";
const apiClient = axios.create({
    baseURL: "https://test.m-aboelela.online/api/",
    headers: {
        'Content-Type': 'multipart/form-data',
        "Accept": "*/*",
        "Content-Length": '',
        "Accept-Encoding": 'gzip, deflate, br',
        "Connection": 'keep-alive',
        "Host": '',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    },
});

const memberService = {
    addproject(data){
        return apiClient.post(`user/projects/create`,data)
    },
    addcontract(data){
        return apiClient.post(`bussiness/contracts/create`,data)
    },
    addnewFile(){
        return apiClient.post(`bussiness/projects/newfile`)
    },
    placeproject(){
        return apiClient.post(`person/offers/placeOffer`)
    },
};


export default memberService;


