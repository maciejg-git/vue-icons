import { h } from 'vue'
export default {
  $_icon: {
    name: "PageLayoutSidebarRight",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["page","layout","sidebar","right"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M6,2H18A2,2 0 0,1 20,4V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2M14,8V16H18V8H14Z"}
        ) 
      ]
    )
  }
}