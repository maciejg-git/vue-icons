import { h } from 'vue'
export default {
  $_icon: {
    name: "Tournament",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["tournament"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-tournament"},
      [ 
        h(
          "path",
          {"d":"M2,2V4H7V8H2V10H7C8.11,10 9,9.11 9,8V7H14V17H9V16C9,14.89 8.11,14 7,14H2V16H7V20H2V22H7C8.11,22 9,21.11 9,20V19H14C15.11,19 16,18.11 16,17V13H22V11H16V7C16,5.89 15.11,5 14,5H9V4C9,2.89 8.11,2 7,2H2Z"}
        ) 
      ]
    )
  }
}