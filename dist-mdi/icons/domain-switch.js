import { h } from 'vue'
export default {
  $_icon: {
    name: "DomainSwitch",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["domain","switch"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M16 9H18V11H16V9M22 15V5H12V1H2V15H22M20 13H12V11H14V9H12V7H20V13M8 5V3H10V5H8M8 9V7H10V9H8M8 13V11H10V13H8M4 5V3H6V5H4M4 9V7H6V9H4M4 13V11H6V13H4M9 17V19H15V17L18 20L15 23V21H9V23L6 20L9 17Z"}
        ) 
      ]
    )
  }
}