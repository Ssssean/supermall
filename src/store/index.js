import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
    list:[{iid:123,img:'156435',count:0},
          {iid:5465423,img:'2465465',count:0}]
  },
  mutations:{
    addCart(state,payload){
      // let index = state.list.indexOf(payload);

      let oldProduct = state.list.find(item => item.iid == payload.iid)
      console.log(state.list);
      if(oldProduct){
        // state.list.oldProduct.count += 1
        console.log(oldProduct);
      }else{
        payload.count = 1;
        state.list.push(payload)
      }
      
    }
  }
})

export default store;