import axios from 'axios';
const InformationService = {
    addBasicInfo,
    getBasicInfo
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
    return instance.get('/basicInfo/details', {})
}

const instance = axios.create({
    baseURL: "http://localhost:8080"
})

instance.interceptors.response.use(response => {
    return response;
});
export default InformationService;