export default (await import('vue')).defineComponent({
  components: {
    BaseContainer,
    TheCounter,
  },
  methods: {
    addOne() {
      this.$store.dispatch({
        type: 'increase',
        value: 10,
      });
    },
  },
});
