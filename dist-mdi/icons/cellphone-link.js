import { h } from 'vue'
export default {
  $_icon: {
    name: "CellphoneLink",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["cellphone","link"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M22,17H18V10H22M23,8H17A1,1 0 0,0 16,9V19A1,1 0 0,0 17,20H23A1,1 0 0,0 24,19V9A1,1 0 0,0 23,8M4,6H22V4H4A2,2 0 0,0 2,6V17H0V20H14V17H4V6Z"}
        ) 
      ]
    )
  }
}