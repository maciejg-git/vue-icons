import { h } from 'vue'
export default {
  $_icon: {
    name: "BookmarkBoxMultipleOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["bookmark","box","multiple","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-bookmark-box-multiple-outline"},
      [ 
        h(
          "path",
          {"d":"M4 20H18V22H4C2.9 22 2 21.1 2 20V6H4V20M22 4V16C22 17.1 21.1 18 20 18H8C6.9 18 6 17.1 6 16V4C6 2.9 6.9 2 8 2H20C21.1 2 22 2.9 22 4M20 4H8V16H20V4M18 6H13V13L15.5 11.5L18 13V6Z"}
        ) 
      ]
    )
  }
}