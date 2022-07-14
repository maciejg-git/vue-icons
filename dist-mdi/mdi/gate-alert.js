import { h } from 'vue'
export default {
  $_icon: {
    name: "GateAlert",
    vendor: "Mdi",
    type: "",
    tags: ["gate","alert"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-gate-alert"},
      [ 
        h(
          "path",
          {"d":"M21 17H19V19H21V17M21 9H19V15H21V9M17 13V11H15V6H13V11H11V6H9V11H7V7H5V11H3V9H1V21H3V19H5V21H7V19H9V21H11V19H13V21H15V19H17V17H15V13H17M5 17H3V13H5V17M9 17H7V13H9V17M13 17H11V13H13V17Z"}
        ) 
      ]
    )
  }
}