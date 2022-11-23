import { h } from 'vue'
export default {
  $_icon: {
    name: "RenameBoxOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["rename","box","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M17 17H11.5L13.5 15H17M7 17V14.5L14.9 6.7C15.1 6.5 15.4 6.5 15.6 6.7L17.4 8.5C17.6 8.7 17.6 9 17.4 9.2L9.5 17M19 5V19H5V5H19M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z"}
        ) 
      ]
    )
  }
}