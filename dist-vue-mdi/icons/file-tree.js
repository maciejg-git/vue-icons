import { h } from 'vue'
export default {
  $_icon: {
    name: "FileTree",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["file","tree"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M3,3H9V7H3V3M15,10H21V14H15V10M15,17H21V21H15V17M13,13H7V18H13V20H7L5,20V9H7V11H13V13Z"}
        ) 
      ]
    )
  }
}