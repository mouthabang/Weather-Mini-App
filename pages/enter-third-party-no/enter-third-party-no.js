import {
  loadLanguage
} from '../../i18n/i18n';
import {
  weatherApi
} from "../../services/api";

const app = getApp();

Page({
  data: {
    apiError: false,
    isLoading: false,
    policyNo: "",
    errorMessage: "",
    dialogVisible: false
  },
  onLoad() {

    loadLanguage(app.languageCode);
    this.setData({
      i18n: app.i18n,
      dialogFooter: {
        buttons: [{
          text: "Okay",
          style: 'background-color: #E60000;  box-shadow: 0 0 0 2px #E60000;'
        }]
      }
    });
  },


  onPolicyChange(value) {
    console.log(value);

    this.setData({
      policyNo: value
    })

  },


  onPolicyValidationError(errorMessage) {
    console.log(errorMessage);

    this.setData({
      policyNoErrorField: errorMessage || ""
    });
  },


  async onContinue() {

    my.hideKeyboard();
    await new Promise(resolve => setTimeout(resolve, 100));

    if (this.data.policyNoErrorField) {
      this.setData({
        dialogVisible: true,
        errorMessage: this.data.policyNoErrorField
      });
    }

    try {

      this.setData({
        isLoading: true
      });

      const response = await weatherApi.getCustomerInfo(this.data.policyNo);
      console.log(response);

      if (response.responseCode == "200") {
        console.log("ALL is good");
      }

      if(response.responseCode == "9") {
        this.setData({
          dialogVisible: true,
          errorMessage: response.responseDesc
        });


        return;
      }

    } catch (error) {


      if(error.errorMessage == "Operation cancelled" || error.errorMessage == "Canceled by user" ) {
        this.setData({
          apiError: false
        })

        return;
      }


      this.setData({
        apiError: true
      });

    } finally {
      this.setData({
        isLoading: false
      })
    }

  },


  handleClose() {
    this.setData({
      dialogVisible: false
    });
  },

  onButtonTap() {
    this.handleClose();
  },





});