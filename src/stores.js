/**
 * Created by jsonliu on 2017/10/1.
 */

export default{

  state:{
    selected:0
  },
  getters:{
    getIndex(state){
      return state.selected
    }
  },
  actions:{

  },
  mutations:{
    changeSelect(state,index){
      state.selected = index
    }

  }
}
