import { h } from 'vue'
export default {
  $_icon: {
    name: "MapMarkerMinus",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["map","marker","minus"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M9,11.5A2.5,2.5 0 0,0 11.5,9A2.5,2.5 0 0,0 9,6.5A2.5,2.5 0 0,0 6.5,9A2.5,2.5 0 0,0 9,11.5M9,2C12.86,2 16,5.13 16,9C16,14.25 9,22 9,22C9,22 2,14.25 2,9A7,7 0 0,1 9,2M15,17H23V19H15V17Z"}
        ) 
      ]
    )
  }
}