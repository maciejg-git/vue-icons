import { h } from 'vue'
export default {
  $_icon: {
    name: "Dolphin",
    vendor: "Mdi",
    type: "",
    tags: ["dolphin"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-dolphin"},
      [ 
        h(
          "path",
          {"d":"M20 7C20 7 20 3 15 3C13.47 3 12.15 3.19 11 3.5C10.5 3.06 7.26 .309 4 3.57L6.56 6.13C2.5 10.53 4 18 4 18S1 18 1 22C1 22 5 21 5 21C5 21 9 22 9 22C9 18 6 18 6 18S6.85 12.24 13 11.18V14C15 14 15.68 12.19 15.89 11H18C22 11 23 10 23 9S21 7 20 7M18 8C17.45 8 17 7.55 17 7S17.45 6 18 6 19 6.45 19 7 18.55 8 18 8Z"}
        ) 
      ]
    )
  }
}