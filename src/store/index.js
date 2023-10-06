import { createStore } from 'vuex'

export default createStore({
    state:{
        data: [],
        templateLanguage: 'spanish'
    },
    mutations:{
        setData(state, payload){
            if(!payload) {payload = []}
            state.data = payload;
        },
        setTemplateLanguage(state, payload){
            state.templateLanguage=payload;
        }
    },
    actions:{
        setData({commit},payload){
            commit('setData', payload);
        },
        setTemplateLanguage({commit},payload){
            commit('setTemplateLanguage', payload);
        }
    },
    getters:{
        getData(state){
            return state.data.find(d => d.templateLanguage === state.templateLanguage);
          }, 
        getTemplateLanguage(state){   
            return state.templateLanguage;
          }, 
    }
  })