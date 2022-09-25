import { h } from 'vue'
export default {
  $_icon: {
    name: "ContentSavePlusOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["content","save","plus","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-content-save-plus-outline"},
      [ 
        h(
          "path",
          {"d":"M5 3C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H12.81C12.45 20.38 12.2 19.7 12.08 19H5V5H16.17L19 7.83V12.08C19.7 12.2 20.38 12.45 21 12.81V7L17 3H5M6 6V10H15V6H6M12 12C10.34 12 9 13.34 9 15S10.34 18 12 18C12 16.11 12.89 14.34 14.39 13.21C13.85 12.5 13 12 12 12M17 14V17H14V19H17V22H19V19H22V17H19V14H17Z"}
        ) 
      ]
    )
  }
}