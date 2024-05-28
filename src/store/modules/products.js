export default {
  namespaced: true,
  state() {
    return {
      products: [
        {
          id: 1,
          title: 'Product 1',
        },
        {
          id: 2,
          title: 'Product 2',
        },
        {
          id: 3,
          title: 'Product 3',
        },
      ],
    };
  },
  getters: {
    products(state) {
      return state.products;
    },
  },
};
