import { h } from 'vue'
export default {
  $_icon: {
    name: "ContentSaveAlertOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["content","save","alert","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-content-save-alert-outline"},
      [ 
        h(
          "path",
          {"d":"M15 3H3C1.9 3 1 3.9 1 5V19C1 20.1 1.9 21 3 21H17C18.1 21 19 20.1 19 19V7L15 3M17 19H3V5H14.2L17 7.8V19M10 12C8.3 12 7 13.3 7 15S8.3 18 10 18 13 16.7 13 15 11.7 12 10 12M4 6H13V10H4V6M23 13H21V7H23V13M23 17H21V15H23V17Z"}
        ) 
      ]
    )
  }
}