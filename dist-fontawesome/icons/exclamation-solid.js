import { h } from 'vue'
export default {
  $_icon: {
    name: "Exclamation",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["Solid"],
    tags: ["exclamation"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 128 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64l0 256c0 17.7 14.3 32 32 32s32-14.3 32-32L96 64zM64 480a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"}
        ) 
      ]
    )
  }
}