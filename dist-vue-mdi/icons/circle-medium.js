import { h } from 'vue'
export default {
  $_icon: {
    name: "CircleMedium",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["circle","medium"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z"}
        ) 
      ]
    )
  }
}