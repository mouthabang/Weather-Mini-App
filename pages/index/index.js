import {
  loadLanguage
} from '../../i18n/i18n';

const app = getApp();

Page({

  data: {
    firstnameErrorField: '',
    errorMessage: '',
    firstname: 'ABCD',
    amount: "",
    apiError: false,
    isLoading: false,
    dialogVisible: false,
    dialogFooter: {
      buttons: [{
        text: "Okay",
        style: 'background-color: #E60000;  box-shadow: 0 0 0 2px #E60000;'
      }]
    }

  },
  onLoad(query) {

    loadLanguage(app.languageCode);
    this.setData({
      i18n: app.i18n,
      firstname: ""
    });

  },

  onFirstnameInput(e) {

    const value  = e.detail.value;

    this.setData({
      firstname: value 
    }); 

  
  },

  handleClose() {
    this.setData({
      dialogVisible: false
    });
  },

  onButtonTap() {
    this.handleClose();
  },


  onContinue() {
    console.log("You have clicked me");

    if(this.data.firstnameErrorField) {
      this.setData({
        dialogVisible: true,
        errorMessage: this.data.firstnameErrorField
      });
  
      return;
    }

    my.navigateTo({
      url: `/pages/view-weather/view-weather?firstname=${this.data.firstname}`
    });
  },

  onFirstnameChange(value) {
    console.log(value);

    this.setData({
      firstname: value
    })
  },

  onFirstnameValidationError(errorMessage) {
    this.setData({
      firstnameErrorField: errorMessage || ""
    });

    console.log(this.data.firstnameErrorField);
  },

  onAmountChange(value) {
    console.log(value);

    this.setData({
      amount: value
    });
  }, 

  onReady() {},
  onShow() {},
  onHide() {},
  onUnload() {},
  onTitleClick() {},
  onPullDownRefresh() {},
  onReachBottom() {},
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: 'My App',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },
});