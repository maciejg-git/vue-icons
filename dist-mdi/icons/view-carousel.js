import { h } from 'vue'
export default {
  $_icon: {
    name: "ViewCarousel",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["view","carousel"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M18,6V17H22V6M2,17H6V6H2M7,19H17V4H7V19Z"}
        ) 
      ]
    )
  }
}