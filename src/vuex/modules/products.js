import * as types from "../mutation-types"
import axios from "axios"

const state = {
  all: [],
  id: 0,
  page: 1,
  order:'',
  is_self:'',
  price: '',
  location_id: '',
  cata_id: '',
  attr: ''
}

const getters = {
  allProducts: (state) => {
    return (id) => {
      console.log(id);
      return state.all
    }
  }
}

const actions = {
  getAllProducts({ commit }, id) {
    		axios.get(`http://api.restful.5lux.com.cn/good/cata_goods_list?id=${id}&sort=&page=&order=&is_self=&price=&location_id=&cata_id=&attr=`)
	    .then((res)=>{
	    	console.log(res)
	    	
	    })
  }
}

const mutations = {
  [types.RECEIVE_PRODUCTS] (state, products) {
    state.all = products
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
