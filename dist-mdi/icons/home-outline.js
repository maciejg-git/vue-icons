import { h } from 'vue'
export default {
  $_icon: {
    name: "HomeOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["home","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69M12 3L2 12H5V20H11V14H13V20H19V12H22"}
        ) 
      ]
    )
  }
}