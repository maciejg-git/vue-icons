import { h } from 'vue'
export default {
  $_icon: {
    name: "DongSign",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["solid"],
    tags: ["dong","sign"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 384 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M288 32c-17.7 0-32 14.3-32 32l-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h32v49.1c-18.8-10.9-40.7-17.1-64-17.1c-70.7 0-128 57.3-128 128s57.3 128 128 128c24.5 0 47.4-6.9 66.8-18.8c5 11.1 16.2 18.8 29.2 18.8c17.7 0 32-14.3 32-32V288 128c17.7 0 32-14.3 32-32s-14.3-32-32-32c0-17.7-14.3-32-32-32zM256 288c0 35.3-28.7 64-64 64s-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64zM32 448c-17.7 0-32 14.3-32 32s14.3 32 32 32H352c17.7 0 32-14.3 32-32s-14.3-32-32-32H32z"}
        ) 
      ]
    )
  }
}