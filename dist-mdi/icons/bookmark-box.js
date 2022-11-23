import { h } from 'vue'
export default {
  $_icon: {
    name: "BookmarkBox",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["bookmark","box"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M18 14L15.5 12.5L13 14V6H18V14Z"}
        ) 
      ]
    )
  }
}