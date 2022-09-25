import { h } from 'vue'
export default {
  $_icon: {
    name: "FormatOverline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["format","overline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-format-overline"},
      [ 
        h(
          "path",
          {"d":"M5,5H19V3H5V5M9.62,16L12,9.67L14.37,16M11,7L5.5,21H7.75L8.87,18H15.12L16.25,21H18.5L13,7H11Z"}
        ) 
      ]
    )
  }
}