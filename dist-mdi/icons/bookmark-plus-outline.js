import { h } from 'vue'
export default {
  $_icon: {
    name: "BookmarkPlusOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["bookmark","plus","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M17,18V5H7V18L12,15.82L17,18M17,3A2,2 0 0,1 19,5V21L12,18L5,21V5C5,3.89 5.9,3 7,3H17M11,7H13V9H15V11H13V13H11V11H9V9H11V7Z"}
        ) 
      ]
    )
  }
}