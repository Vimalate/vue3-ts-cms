// import Components from "unplugin-vue-components/webpack"
// import { ElementPlusResolver } from "unplugin-vue-components/resolvers"
module.exports = {
  plugins: [
    // [
    //   "import",
    //   {
    //     libraryName: "element-plus",
    //     customStyleName: (name) => {
    //       return `element-plus/theme-chalk/${name}.css`
    //     }
    //   }
    // ]
  ],
  // plugins: [
  //   Components({
  //     resolvers: [ElementPlusResolver()]
  //   })
  // ],
  presets: ["@vue/cli-plugin-babel/preset"]
}
