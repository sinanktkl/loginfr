
import axios from "axios";

export const commonAPI = async (httpRequest, url, reqBody, reqHeader) => {
    const reqConfig = {
        method: httpRequest,
        url,
        data: reqBody,
        headers: reqHeader ? reqHeader : { "Content-Type": "application/json" },
        withCredentials: true // ✅ Important for cookies (JWT token)
    };
    
    try {
        const res = await axios(reqConfig);
        return res;
    } catch (err) {
        return err.response || err;
    }
};





























































































// import axios from "axios"


// export const commonAPI = async(httpRequest,url,reqBody,reqHeader)=>{
//     const reqConfig = {
//         method:httpRequest,
//         url,
//         data:reqBody,
//         headers:reqHeader?reqHeader:{"Content-Type":"application/json"}
//         // headers: (reqHeader && Object.keys(reqHeader).length) ? reqHeader : { "Content-Type": "application/json" },
//     }
//     return await axios(reqConfig).then(res=>{
//         return res
//     }).catch(err=>{
//         return err
//     })

// }