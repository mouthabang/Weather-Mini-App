const app = getApp();
let i18n = null;


Component({
  mixins: [],
  data: {
    errorMessage: '',
    validationType: null, 
    internalValue: '',
    internalPlaceHolder: ''
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

      if (this.props.onValidationError) {
        this.props.onValidationError(errorMessage || '');
      }


    },


    validateInput(value, type) {

      if (!type) {
        return;
      }

      switch(type) {
        case 'name': 
        return this.validateFirstname(value);
        case "policy":
          return this.validatePolicyNo(value);
      }
    },


    validateFirstname(value) {

      if(!/^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/.test(value)) {
        return "Your name is not in the right format";
      }

      if(value.length < 2) {
        return "Your name should be greater that 2 characters"
      }

      return '';
    },

    validatePolicyNo(value) {
      console.log(value);

      if(!/^[0-9]+$/.test(value)) {
        return "Policy is not in the correct format"
      }


      return "";
    }


  },
});
