import store from "@/store"
import localForage from 'localforage';

const routerFilter = async (routes) => {
    const temp = await localForage.getItem("auth")
    let myrole = null
    if(temp){
      myrole = temp.auth.user.role
    }
    const isLoggedIn = store.getters['getisLoggedIn']
    return routes.filter((row) => {
      return (row.meta.requiresAuth == isLoggedIn && ((row.meta.roleVerif && row.meta.role.some(role => role == myrole) || !row.meta.roleVerif))) || !row.meta.requiresAuth
    })
  }

const formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

export {
    routerFilter,
    formatBytes
}