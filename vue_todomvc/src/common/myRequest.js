import axios from "axios"

export const getReq = async function () {
    let res = await axios.get("/api")
    console.log(res.data)
    return res.data
}


export const postReq = async function (obj) {
    return await axios({
        method: 'post',
        url: '/api',
        data: obj,
        xhrFields: { withCredentials: false },
        crossDomain: false
    })
} 