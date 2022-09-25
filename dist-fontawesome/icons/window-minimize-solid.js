import { h } from 'vue'
export default {
  $_icon: {
    name: "WindowMinimize",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["solid"],
    tags: ["window","minimize"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512","fill":"currentColor","data-name":"fa-window-minimize"},
      [ 
        h(
          "path",
          {"d":"M0 448C0 430.3 14.33 416 32 416H480C497.7 416 512 430.3 512 448C512 465.7 497.7 480 480 480H32C14.33 480 0 465.7 0 448z"}
        ) 
      ]
    )
  }
}