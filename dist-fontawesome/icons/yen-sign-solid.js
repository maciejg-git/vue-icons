import { h } from 'vue'
export default {
  $_icon: {
    name: "YenSign",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["solid"],
    tags: ["yen","sign"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 320 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M58.6 46.2C48.8 31.5 29 27.6 14.2 37.4S-4.4 67 5.4 81.7L100.2 224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32h80v32H48c-17.7 0-32 14.3-32 32s14.3 32 32 32h80v64c0 17.7 14.3 32 32 32s32-14.3 32-32V384h80c17.7 0 32-14.3 32-32s-14.3-32-32-32H192V288h80c17.7 0 32-14.3 32-32s-14.3-32-32-32H219.8L314.6 81.7c9.8-14.7 5.8-34.6-8.9-44.4s-34.6-5.8-44.4 8.9L160 198.3 58.6 46.2z"}
        ) 
      ]
    )
  }
}