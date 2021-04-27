import axios from 'axios';
const InformationService = {
    addBasicInfo,
    getBasicInfo,
    putBasicInfo,
    deleteBasicInfo
}
function addBasicInfo(basicInfo) {
    console.log("service user ::" + JSON.stringify(basicInfo));
    instance.post("/basicInfo", basicInfo, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

function getBasicInfo() {
    console.log(JSON.stringify(instance));
    return instance.get('/basicInfo', {})
}
function deleteBasicInfo(id) {
    console.log(JSON.stringify(instance));
    return instance.delete(`/basicInfo/${id}`, {})
}
function putBasicInfo(data) {
    let id = data.id;


    console.log(JSON.stringify(instance));
    return instance.put(`/basicInfo/${id}`, data)
}
const instance = axios.create({
    baseURL: "http://localhost:8080"
})

instance.interceptors.response.use(response => {
    return response;
});
export default InformationService;