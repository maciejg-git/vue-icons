import { h } from 'vue'
export default {
  $_icon: {
    name: "ChatBubbleOvalLeft",
    vendor: "H",
    license: "MIT",
    type: ["24","outline"],
    tags: ["chat","bubble","oval","left"],
  },
  render() {
    return h(
      "svg",
      {"width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","xmlns":"http://www.w3.org/2000/svg"},
      [ 
        h(
          "path",
          {"d":"M12 20.25C16.9706 20.25 21 16.5563 21 12C21 7.44365 16.9706 3.75 12 3.75C7.02944 3.75 3 7.44365 3 12C3 14.1036 3.85891 16.0234 5.2728 17.4806C5.70538 17.9265 6.01357 18.5192 5.85933 19.121C5.68829 19.7883 5.368 20.3959 4.93579 20.906C5.0918 20.9339 5.25 20.9558 5.40967 20.9713C5.60376 20.9903 5.80078 21 6 21C7.28201 21 8.47016 20.5979 9.44517 19.9129C10.2551 20.1323 11.1125 20.25 12 20.25Z","stroke":"#0F172A","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}
        ) 
      ]
    )
  }
}