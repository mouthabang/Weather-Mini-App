const app = getApp();
let i18n = null;


Component({
  mixins: [],
  data: {
    errorMessage: '',
    validationType: null, 
    internalValue: '',
    placeholder: ""
  },
  props: {
    value: '',

    inputType: 'text',
    validationType: '', 
    placeholder: "",
    onValueChange: () => {},
    onValidationError: () => {}

  },
  didMount() {
    if (this.props.validationType) {
      this.setData({
        validationType: this.props.validationType,
        internalValue: this.props.value || ''
      });
    }
  },
  didUpdate(prevProps) {
    if (this.props.value !== prevProps.value) {
      this.setData({
        internalValue: this.props.value || ''
      });
    }
  },
  didUnmount() {},
  methods: {
    onInput(e) {

      const value = e.detail.value;
      let errorMessage = "";
      
      this.setData({
        internalValue: value
      });

  
      if(this.data.validationType) {
        errorMessage = this.validateInput(value, this.data.validationType);
        this.setData({
          errorMessage: errorMessage
        })

      }

      if (this.props.onValueChange) {
        // Pass both value and validation status
        this.props.onValueChange(value, errorMessage === '');
      }


    },


    validateInput(value, type) {

      if (!type) {
        return;
      }

      switch(type) {
        case 'name': 
        return this.validateFirstname(value);
      }
    },


    validateFirstname(value) {

      console.log(value);

      if(!/^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/.test(value)) {
        return "Your name is not in the right format";
      }


      

      return '';
    }
  },
});
