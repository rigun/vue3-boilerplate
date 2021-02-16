import {
    getData
} from '@/store/config/method'
import {
    diffDateTime
} from '@/helpers/timeformat'
const expired_in_minutes = -30;
const initialState = () => ({
    status: "category2",
    message: null,
    created_at: null,
    list: []
})
const state = initialState
 
const getters = {
    getMessage: state => state.message,
    getStatus: state => state.status,
    getList: state => state.list || [],
}
const actions = {
    async getData({
        commit
    }) {
        try {
            const response = await getData('api','/generals/areas');
            commit('SET_LIST', response.data);
        } catch (err) {
            if(err.response){
                commit('SET_FAILED_MESSAGE', err.response)
            }else{
                commit('SET_FAILED')
            }
        }
    },
    resetState({commit, state}){
        const temp = diffDateTime(new Date(), state.created_at)
        if(temp <= expired_in_minutes){
            commit('resetState')
        }
    }
}

const mutations = {
    SET_FAILED(state) {
        state.message = 'Jaringan Bermasalah'
        state.status = 0
    },
    SET_FAILED_MESSAGE(state, error) {
        if(error.status == 400){
            state.message = error.data.message
            state.status = error.data.status
        }else{
            state.message = 'Jaringan Bermasalah'
            state.status = 0
        }
    },
    SET_LIST(state, response) {
        state.message = response.message
        state.status = response.status
        state.list = response.data
        state.created_at = new Date()
    },
    resetState (state) {
        const initial = initialState()
        Object.keys(initial).forEach(key => { state[key] = initial[key] })
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}