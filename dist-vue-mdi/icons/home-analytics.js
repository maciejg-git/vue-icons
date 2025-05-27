import { h } from 'vue'
export default {
  $_icon: {
    name: "HomeAnalytics",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["home","analytics"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M12,3L2,12H5V20H19V12H22M9,18H7V12H9M13,18H11V10H13M17,18H15V14H17"}
        ) 
      ]
    )
  }
}