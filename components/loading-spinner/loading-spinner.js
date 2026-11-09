Component({
  mixins: [],
  data: {},
  props: {
    isLoading: false,
    onClickMe: () => {}

  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    onClickMe() {
      this.props.onClickMe();
    }
  },
});
