import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowExpandRight",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["arrow","expand","right"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M4,2H2V22H4V13H18.17L12.67,18.5L14.08,19.92L22,12L14.08,4.08L12.67,5.5L18.17,11H4V2Z"}
        ) 
      ]
    )
  }
}