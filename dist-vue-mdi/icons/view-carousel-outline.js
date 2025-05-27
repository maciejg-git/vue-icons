import { h } from 'vue'
export default {
  $_icon: {
    name: "ViewCarouselOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["view","carousel","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M2 6H6V17H2V6M7 19H17V4H7V19M9 6H15V17H9V6M18 6H22V17H18V6Z"}
        ) 
      ]
    )
  }
}