import { h } from 'vue'
export default {
  $_icon: {
    name: "BookArrowDown",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["book","arrow","down"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-book-arrow-down"},
      [ 
        h(
          "path",
          {"d":"M13 19C13 20.1 13.3 21.12 13.81 22H6C4.89 22 4 21.11 4 20V4C4 2.9 4.89 2 6 2H7V9L9.5 7.5L12 9V2H18C19.1 2 20 2.89 20 4V13.09C19.67 13.04 19.34 13 19 13C15.69 13 13 15.69 13 19M20 20V16H18V20H16L19 23L22 20H20Z"}
        ) 
      ]
    )
  }
}