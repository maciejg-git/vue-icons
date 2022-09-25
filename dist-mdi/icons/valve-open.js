import { h } from 'vue'
export default {
  $_icon: {
    name: "ValveOpen",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["valve","open"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-valve-open"},
      [ 
        h(
          "path",
          {"d":"M4 22H2V2H4M22 2H20V22H22M11 4V9.18A3 3 0 0 0 11 14.82V20H13V14.82A3 3 0 0 0 13 9.18V4Z"}
        ) 
      ]
    )
  }
}