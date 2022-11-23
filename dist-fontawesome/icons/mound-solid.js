import { h } from 'vue'
export default {
  $_icon: {
    name: "Mound",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["solid"],
    tags: ["mound"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 576 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M144.1 179.2C173.8 127.7 228.6 96 288 96s114.2 31.7 143.9 83.2L540.4 368c12.3 21.3-3.1 48-27.7 48H63.3c-24.6 0-40-26.6-27.7-48L144.1 179.2z"}
        ) 
      ]
    )
  }
}