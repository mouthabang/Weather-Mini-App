import {
  loadLanguage
} from '../../i18n/i18n';

const app = getApp();

Page({
  onLoad(query) {
    
    loadLanguage(app.languageCode);
    this.setData({
      i18n: app.i18n
    });

    console.log(this.data);
  },
  onReady() {
  },
  onShow() {
  },
  onHide() { 
  },
  onUnload() {
  },
  onTitleClick() {
  },
  onPullDownRefresh() {
  },
  onReachBottom() {
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: 'My App',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },
});
