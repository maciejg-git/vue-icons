import { h } from 'vue'
export default {
  $_icon: {
    name: "DoorSlidingOpen",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["door","sliding","open"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M6 11V13H4V11H6M22 5H17V19H22V5M7 5H2L2 19H7V5M22 3C23.11 3 24 3.89 24 5V21H0V5C0 3.89 .894 3 2 3H9V19H15V3H22M20 11H18V13H20V11Z"}
        ) 
      ]
    )
  }
}