import { h } from 'vue'
export default {
  $_icon: {
    name: "HomeAlertOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["home","alert","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M12 5.7L17 10.2V18H7V10.2L12 5.7M19 20V12H22L12 3L2 12H5V20M13 8H11V13H13V8M13 15H11V17H13V15"}
        ) 
      ]
    )
  }
}