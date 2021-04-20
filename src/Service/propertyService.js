import axios from 'axios';
const PropertyService = {
    addPropertyInfo
}
function addPropertyInfo(propertyInfo) {
    console.log("service user ::" + JSON.stringify(propertyInfo));
    instance.post("/propertyInfo", propertyInfo, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

function getPropertyData() {
    console.log(JSON.stringify(instance));
    return instance.get('/post/getPost', {})
}

const instance = axios.create({
    baseURL: "http://localhost:8080"
})

instance.interceptors.response.use(response => {
    return response;
});
export default PropertyService;