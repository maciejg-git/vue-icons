import { h } from 'vue'
export default {
  $_icon: {
    name: "FloorLampTorchiereOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["floor","lamp","torchiere","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M14 4L12.7 7H11.3L10 4H14M17 2H7L10 9H14L17 2M13 20H16V22H8V20H11V10H13V20Z"}
        ) 
      ]
    )
  }
}