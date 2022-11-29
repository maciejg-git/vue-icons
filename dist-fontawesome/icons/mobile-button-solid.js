import { h } from 'vue'
export default {
  $_icon: {
    name: "MobileButton",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["Solid"],
    tags: ["mobile","button"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 384 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M80 0C44.7 0 16 28.7 16 64V448c0 35.3 28.7 64 64 64H304c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H80zM192 464c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z"}
        ) 
      ]
    )
  }
}