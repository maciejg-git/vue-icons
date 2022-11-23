import { h } from 'vue'
export default {
  $_icon: {
    name: "TabletScreenButton",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["solid"],
    tags: ["tablet","screen","button"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 448 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M0 64C0 28.7 28.7 0 64 0H384c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM256 448c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zM384 64H64V384H384V64z"}
        ) 
      ]
    )
  }
}