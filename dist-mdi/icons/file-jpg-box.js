import { h } from 'vue'
export default {
  $_icon: {
    name: "FileJpgBox",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["file","jpg","box"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-file-jpg-box"},
      [ 
        h(
          "path",
          {"d":"M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M9 13.5C9 14.6 8.1 15 7 15S5 14.6 5 13.5V12H6.5V13.5H7.5V9H9V13.5M14 11.5C14 12.3 13.3 13 12.5 13H11.5V15H10V9H12.5C13.3 9 14 9.7 14 10.5V11.5M19 10.5H16.5V13.5H17.5V12H19V13.7C19 14.4 18.5 15 17.7 15H16.4C15.6 15 15.1 14.3 15.1 13.7V10.4C15 9.7 15.5 9 16.3 9H17.6C18.4 9 18.9 9.7 18.9 10.3V10.5M11.5 10.5H12.5V11.5H11.5V10.5Z"}
        ) 
      ]
    )
  }
}