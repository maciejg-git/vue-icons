import { h } from 'vue'
export default {
  $_icon: {
    name: "FileRotateRight",
    vendor: "Mdi",
    type: "",
    tags: ["file","rotate","right"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-file-rotate-right"},
      [ 
        h(
          "path",
          {"d":"M5 20C3.9 20 3 19.11 3 18V9C3 7.9 3.9 7 5 7H9L13 11V18C13 19.11 12.11 20 11 20H5M11 11.83L8.17 9H8V12H11V11.83M20 11H23L19 15L15 11H18C18 7.69 15.31 5 12 5L11 5.08V3.06L12 3C16.42 3 20 6.58 20 11"}
        ) 
      ]
    )
  }
}