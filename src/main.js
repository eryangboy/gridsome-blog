// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import util from "../src/utils/util";

import ElementUI from "element-ui";
import DefaultLayout from "~/layouts/Default.vue";
import "element-ui/lib/theme-chalk/index.css";
import "../static/index.css";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);

  Vue.use(ElementUI);

  Vue.prototype.$util = util;
}
