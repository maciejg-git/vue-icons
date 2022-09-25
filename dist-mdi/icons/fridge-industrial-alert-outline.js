import { h } from 'vue'
export default {
  $_icon: {
    name: "FridgeIndustrialAlertOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["fridge","industrial","alert","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-fridge-industrial-alert-outline"},
      [ 
        h(
          "path",
          {"d":"M8 15H6V10H8V15M17 4V19C17 20.11 16.11 21 15 21V22H13V21H7V22H5V21C3.9 21 3 20.11 3 19V4C3 2.9 3.9 2 5 2H15C16.11 2 17 2.9 17 4M15 4H5V19H15V4M19 17H21V15H19V17M19 7V13H21V7H19Z"}
        ) 
      ]
    )
  }
}