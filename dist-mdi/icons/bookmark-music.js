import { h } from 'vue'
export default {
  $_icon: {
    name: "BookmarkMusic",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["bookmark","music"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-bookmark-music"},
      [ 
        h(
          "path",
          {"d":"M17,3A2,2 0 0,1 19,5V21L12,18L5,21V5C5,3.89 5.9,3 7,3H17M11,11A2,2 0 0,0 9,13A2,2 0 0,0 11,15A2,2 0 0,0 13,13V8H16V6H12V11.27C11.71,11.1 11.36,11 11,11Z"}
        ) 
      ]
    )
  }
}