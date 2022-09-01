import { h } from 'vue'
export default {
  $_icon: {
    name: "Mustache",
    vendor: "Mdi",
    type: [],
    tags: ["mustache"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-mustache"},
      [ 
        h(
          "path",
          {"d":"M21 12C19 12 18 9 15 9S12 11 12 11 12 9 9 9 5 12 3 12C2 12 1 11 1 11S2 16 6 16C11 16 12 13 12 13S13 16 18 16C22 16 23 11 23 11S22 12 21 12Z"}
        ) 
      ]
    )
  }
}