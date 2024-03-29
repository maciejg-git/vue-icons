import { h } from 'vue'
export default {
  $_icon: {
    name: "TablePicnic",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["table","picnic"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M4 6H20V9H18L18.22 11H23V13H18.44L19 18H16.5L15.94 13H8.06L7.5 18H5L5.56 13H1V11H5.78L6 9H4M15.5 9H8.5L8.29 11H15.71Z"}
        ) 
      ]
    )
  }
}