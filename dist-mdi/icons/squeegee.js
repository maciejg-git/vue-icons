import { h } from 'vue'
export default {
  $_icon: {
    name: "Squeegee",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["squeegee"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M22,2V5H2V2H22M2,8H7L9,10H10V20A2,2 0 0,0 12,22A2,2 0 0,0 14,20V10H15L17,8H22V6H2V8Z"}
        ) 
      ]
    )
  }
}