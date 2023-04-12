export default defineAppConfig({
  pages: ["pages/index/index", "pages/profile/index"],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    color: "#7A7E83",
    selectedColor: "#d81e06",
    borderStyle: "black",
    backgroundColor: "#fffff",
    list: [
      {
        pagePath: "pages/index/index",
        iconPath: "assets/icons/home.png",
        selectedIconPath: "assets/icons/home_selected.png",
        text: "首页",
      },
      {
        pagePath: "pages/profile/index",
        iconPath: "assets/icons/user.png",
        selectedIconPath: "assets/icons/user_selected.png",
        text: "我的",
      },
    ],
  },
});
