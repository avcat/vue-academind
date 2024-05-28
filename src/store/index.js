import { createStore } from 'vuex';
import moduleProducts from './modules/products';

const store = createStore({
  modules: {
    products: moduleProducts,
  },
});

export default store;
