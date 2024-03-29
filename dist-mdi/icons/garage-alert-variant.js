import { h } from 'vue'
export default {
  $_icon: {
    name: "GarageAlertVariant",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["garage","alert","variant"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M20 9V20H18V11H2V20H0V9L10 5L20 9M17 12H3V14H17V12M17 15H3V17H17V15M22 15V10H24V15H22M22 19V17H24V19H22Z"}
        ) 
      ]
    )
  }
}