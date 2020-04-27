import axios from "axios"

export function request(config) {
  //创建axios实例
  const instance = axios.create({
    baseURL: "https://tianqiapi.com/api?version=v1&appid=15722942&appsecret=Ht2vMwvI",
    timeout:10000
  })
  
  //拦截响应
  instance.interceptors.response.use(res =>{
    return res.data
  },err => {
    console.log(err)
  })
  
  //发送真正的网络请求
  return instance(config)
}