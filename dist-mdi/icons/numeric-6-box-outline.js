import { h } from 'vue'
export default {
  $_icon: {
    name: "Numeric6BoxOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["numeric","6","box","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M11,13H13V15H11M11,17H13A2,2 0 0,0 15,15V13C15,11.89 14.1,11 13,11H11V9H15V7H11A2,2 0 0,0 9,9V15C9,16.11 9.9,17 11,17M19,19H5V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z"}
        ) 
      ]
    )
  }
}