import { h } from 'vue'
export default {
  $_icon: {
    name: "TrayArrowUp",
    vendor: "Mdi",
    type: [],
    tags: ["tray","arrow","up"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-tray-arrow-up"},
      [ 
        h(
          "path",
          {"d":"M2 12H4V17H20V12H22V17C22 18.11 21.11 19 20 19H4C2.9 19 2 18.11 2 17V12M12 2L6.46 7.46L7.88 8.88L11 5.75V15H13V5.75L16.13 8.88L17.55 7.45L12 2Z"}
        ) 
      ]
    )
  }
}