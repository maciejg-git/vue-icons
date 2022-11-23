import { h } from 'vue'
export default {
  $_icon: {
    name: "EjectOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["eject","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M5,17H19V19H5V17M12,5L5.33,15H18.67L12,5M12,8.6L14.93,13H9.07L12,8.6Z"}
        ) 
      ]
    )
  }
}