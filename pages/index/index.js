Page({
  onLoad(query) {
    console.log("onLoad");
  },
  onReady() {
    console.log("onReady");
  },
  onShow() {
    console.log("onShow");
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
