import { h } from 'vue'
export default {
  $_icon: {
    name: "AlignHorizontalLeft",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["align","horizontal","left"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M4 22H2V2H4V22M22 7H6V10H22V7M16 14H6V17H16V14Z"}
        ) 
      ]
    )
  }
}