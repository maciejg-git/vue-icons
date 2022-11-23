import { h } from 'vue'
export default {
  $_icon: {
    name: "FileExcelBoxOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["file","excel","box","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M5 3C3.89 3 3 3.89 3 5V19C3 20.11 3.89 21 5 21H19C20.11 21 21 20.11 21 19V5C21 3.89 20.11 3 19 3H5M5 5H19V19H5V5M13 12L16.2 17H14.2L12 13.2L9.8 17H7.8L11 12L7.8 7H9.8L12 10.8L14.2 7H16.2L13 12Z"}
        ) 
      ]
    )
  }
}