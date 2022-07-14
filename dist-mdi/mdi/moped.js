import { h } from 'vue'
export default {
  $_icon: {
    name: "Moped",
    vendor: "Mdi",
    type: "",
    tags: ["moped"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-moped"},
      [ 
        h(
          "path",
          {"d":"M19 15C19.55 15 20 15.45 20 16C20 16.55 19.55 17 19 17S18 16.55 18 16C18 15.45 18.45 15 19 15M19 13C17.34 13 16 14.34 16 16S17.34 19 19 19 22 17.66 22 16 20.66 13 19 13M10 6H5V8H10V6M17 5H14V7H17V9.65L13.5 14H10V9H6C3.79 9 2 10.79 2 13V16H4C4 17.66 5.34 19 7 19S10 17.66 10 16H14.5L19 10.35V7C19 5.9 18.11 5 17 5M7 17C6.45 17 6 16.55 6 16H8C8 16.55 7.55 17 7 17Z"}
        ) 
      ]
    )
  }
}