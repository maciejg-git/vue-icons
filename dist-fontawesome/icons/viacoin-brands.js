import { h } from 'vue'
export default {
  $_icon: {
    name: "Viacoin",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["brands"],
    tags: ["viacoin"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 384 512","fill":"currentColor","data-name":"fa-viacoin"},
      [ 
        h(
          "path",
          {"d":"M384 32h-64l-80.7 192h-94.5L64 32H0l48 112H0v48h68.5l13.8 32H0v48h102.8L192 480l89.2-208H384v-48h-82.3l13.8-32H384v-48h-48l48-112zM192 336l-27-64h54l-27 64z"}
        ) 
      ]
    )
  }
}