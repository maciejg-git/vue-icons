import { h } from 'vue'
export default {
  $_icon: {
    name: "CeilingLightMultiple",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["ceiling","light","multiple"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M10 11H13V6H15V11H18L22 19H6L10 11M16 20C16 21.11 15.11 22 14 22S12 21.11 12 20H16M8.21 10.11L8.76 9H11V2H9V7H6L2 15H5.76L8.21 10.11Z"}
        ) 
      ]
    )
  }
}