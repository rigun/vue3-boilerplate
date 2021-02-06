import client from './index'
import store from '@/store'

const getDataWithParams = (type,url,request) => client[type].get(url, {params: request})
const getData = (type,url) => client[type].get(url)
const postData = (type,url,data) => client[type].post(url,data)
const patchData = (type,url,data) => client[type].patch(url,data)
const destroyData = (type,url) => client[type].delete(url)
const uploadData = (type,url,data) => client[type].post(url, data, {"Content-Type": "multipart/form-data",  onUploadProgress: progressEvent => {
    let percentCompleted = Math.floor((progressEvent.loaded * 100) / progressEvent.total);
    store.dispatch('setLoading',percentCompleted)
}})
const downloadFile = (type,url) => client[type].get(url, { responseType: 'blob'})

export {
    getDataWithParams,
    getData,
    postData,
    patchData,
    destroyData,
    uploadData,
    downloadFile
}
