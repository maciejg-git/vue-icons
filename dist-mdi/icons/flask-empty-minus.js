import { h } from 'vue'
export default {
  $_icon: {
    name: "FlaskEmptyMinus",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["flask","empty","minus"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-flask-empty-minus"},
      [ 
        h(
          "path",
          {"d":"M23 17V19H15V17H23M6 22C4.34 22 3 20.66 3 19C3 18.4 3.18 17.84 3.5 17.36L9 7.81V6C8.45 6 8 5.55 8 5V4C8 2.9 8.9 2 10 2H14C15.11 2 16 2.9 16 4V5C16 5.55 15.55 6 15 6V7.81L17.5 12.18C14.92 12.84 13 15.2 13 18C13 19.54 13.58 20.94 14.53 22H6Z"}
        ) 
      ]
    )
  }
}