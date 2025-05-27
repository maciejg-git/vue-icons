import { h } from 'vue'
export default {
  $_icon: {
    name: "FloorLampOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["floor","lamp","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M15 2L17 9H7L9 2M13.6 4H10.4L9.55 7H14.45M11 10H13V20H16V22H8V20H11Z"}
        ) 
      ]
    )
  }
}