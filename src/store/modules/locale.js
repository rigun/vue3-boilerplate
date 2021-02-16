const initialState = () => ({
    currentLocale: null,
})
const state = initialState
const getters = {
    getCurrentLocale: state => state.currentLocale
}

const actions = {
    setCurrentLocale({commit}, value){
        commit('SET_CURRENT_LOCALE', value)
    }
}

const mutations = {
    SET_CURRENT_LOCALE(state, value) {
        state.currentLocale = value
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