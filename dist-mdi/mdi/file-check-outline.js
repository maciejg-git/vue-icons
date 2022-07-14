import { h } from 'vue'
export default {
  $_icon: {
    name: "FileCheckOutline",
    vendor: "Mdi",
    type: "",
    tags: ["file","check","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-file-check-outline"},
      [ 
        h(
          "path",
          {"d":"M23.5 17L18.5 22L15 18.5L16.5 17L18.5 19L22 15.5L23.5 17M13.09 20H6V4H13V9H18V13.09C18.33 13.04 18.66 13 19 13S19.67 13.04 20 13.09V8L14 2H6C4.89 2 4 2.9 4 4V20C4 21.11 4.89 22 6 22H13.81C13.46 21.39 13.21 20.72 13.09 20Z"}
        ) 
      ]
    )
  }
}