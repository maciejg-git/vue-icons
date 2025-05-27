import { h } from 'vue'
export default {
  $_icon: {
    name: "MapMarkerUp",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["map","marker","up"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M12 2A7 7 0 0 0 5 9C5 14.25 12 22 12 22S19 14.25 19 9A7 7 0 0 0 12 2M16.5 9H14V14H10V9H7.5L12 4.5Z"}
        ) 
      ]
    )
  }
}