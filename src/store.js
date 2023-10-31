import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      counter: 0,
    };
  },
  actions: {
    increase(context, payload) {
      const { value } = payload;
      context.commit({
        type: 'increase',
        value,
      });
    },
  },
  mutations: {
    increment(state) {
      state.counter += 1;
    },
    increase(state, payload) {
      state.counter += payload.value;
    },
  },
});

export default store;
