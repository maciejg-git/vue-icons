import { h } from 'vue'
export default {
  $_icon: {
    name: "FloorLampTorchiere",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["floor","lamp","torchiere"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M7 2L10 9H14L17 2H7M13 20H16V22H8V20H11V10H13V20Z"}
        ) 
      ]
    )
  }
}