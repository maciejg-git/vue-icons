import { h } from 'vue'
export default {
  $_icon: {
    name: "CellphoneSettings",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["cellphone","settings"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-cellphone-settings"},
      [ 
        h(
          "path",
          {"d":"M16,16H8V4H16M16,0H8A2,2 0 0,0 6,2V18A2,2 0 0,0 8,20H16A2,2 0 0,0 18,18V2A2,2 0 0,0 16,0M15,24H17V22H15M11,24H13V22H11M7,24H9V22H7V24Z"}
        ) 
      ]
    )
  }
}