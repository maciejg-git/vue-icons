import { h } from 'vue'
export default {
  $_icon: {
    name: "GateOpen",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["gate","open"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M7 21V7H5V11H3V9H1V21H3V19H5V21H7M3 17V13H5V17H3M21 9V11H19V7H17V21H19V19H21V21H23V9H21M21 17H19V13H21V17Z"}
        ) 
      ]
    )
  }
}