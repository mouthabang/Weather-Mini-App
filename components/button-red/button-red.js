Component({
  mixins: [],
  data: {},
  props: {
    text: 'Button',
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
