import axios from "axios"

export const getReq = async function () {
    let res = await axios.get("/todo")
    console.log(res.data)
    return res.data
}


export const postReq = async function (path,obj) {
    return await axios({
        method: 'post',
        url: '/todo'+path,
        data: obj,
        xhrFields: { withCredentials: false },
        crossDomain: false
    })
} 

export const loginReq =  function (path,obj) {
        return  axios({
        method: 'post',
        url: '/users'+path,
        data: obj,
        xhrFields: { withCredentials: false },
        crossDomain: false
    })

} 