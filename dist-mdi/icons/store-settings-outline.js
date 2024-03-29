import { h } from 'vue'
export default {
  $_icon: {
    name: "StoreSettingsOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["store","settings","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M20 6H4V4H20V6M21 12V14H20V20H18V14H14V20H4V14H3V12L4 7H20L21 12M12 14H6V18H12V14M18.96 12L18.36 9H5.64L5.04 12H18.96M7 24H9V22H7V24M11 24H13V22H11V24M15 24H17V22H15V24Z"}
        ) 
      ]
    )
  }
}