import { h } from 'vue'
export default {
  $_icon: {
    name: "BedSingleOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["bed","single","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-bed-single-outline"},
      [ 
        h(
          "path",
          {"d":"M17 10V7C17 5.9 16.11 5 15 5H9C7.9 5 7 5.9 7 7V10C5.9 10 5 10.9 5 12V17H6.33L7 19H8L8.67 17H15.33L16 19H17L17.67 17H19V12C19 10.9 18.11 10 17 10M9 7H15V10H9M17 15H7V12H17Z"}
        ) 
      ]
    )
  }
}