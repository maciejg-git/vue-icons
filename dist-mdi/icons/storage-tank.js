import { h } from 'vue'
export default {
  $_icon: {
    name: "StorageTank",
    vendor: "Mdi",
    type: [],
    tags: ["storage","tank"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-storage-tank"},
      [ 
        h(
          "path",
          {"d":"M17 6H16V5C16 3.9 15.1 3 14 3H10C8.9 3 8 3.9 8 5V6H7C3.69 6 1 8.69 1 12S3.69 18 7 18V21H9V18H15V21H17V18C20.31 18 23 15.31 23 12S20.31 6 17 6M10 5H14V6H10V5Z"}
        ) 
      ]
    )
  }
}