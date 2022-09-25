import { h } from 'vue'
export default {
  $_icon: {
    name: "Iron",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["iron"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-iron"},
      [ 
        h(
          "path",
          {"d":"M21 6C19.34 6 18 7.34 18 9V13C18 13.55 17.55 14 17 14V10C17 8.34 15.66 7 14 7H10C8.34 7 7 8.34 7 10H9C9 9.45 9.45 9 10 9H14C14.55 9 15 9.45 15 10V11H6C3.79 11 2 12.79 2 15V18H17V16C18.66 16 20 14.66 20 13V9C20 8.45 20.45 8 21 8H22V6H21Z"}
        ) 
      ]
    )
  }
}