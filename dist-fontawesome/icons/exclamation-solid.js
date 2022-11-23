import { h } from 'vue'
export default {
  $_icon: {
    name: "Exclamation",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["solid"],
    tags: ["exclamation"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 128 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z"}
        ) 
      ]
    )
  }
}