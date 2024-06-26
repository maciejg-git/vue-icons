import { h } from 'vue'
export default {
  $_icon: {
    name: "MortarPestle",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["mortar","pestle"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M21 7L19 13L21 19V21H3V19L5 13L3 7V5H15.7L17.2 1L19.5 1.8L18.3 5H21V7Z"}
        ) 
      ]
    )
  }
}