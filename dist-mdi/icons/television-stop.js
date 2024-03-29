import { h } from 'vue'
export default {
  $_icon: {
    name: "TelevisionStop",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["television","stop"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M3 3H21C22.1 3 23 3.89 23 5V17C23 18.1 22.1 19 21 19H16V21H8V19H3C1.9 19 1 18.1 1 17V5C1 3.89 1.89 3 3 3M3 5V17H21V5H3M9 8H15V14H9V8Z"}
        ) 
      ]
    )
  }
}