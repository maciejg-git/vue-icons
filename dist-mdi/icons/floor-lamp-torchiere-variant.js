import { h } from 'vue'
export default {
  $_icon: {
    name: "FloorLampTorchiereVariant",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["floor","lamp","torchiere","variant"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M7 2L10 9H14L17 2H7M15.92 22L13 15V22H11V15L8.08 22H5.92L10.92 10H13.08L18.08 22H15.92Z"}
        ) 
      ]
    )
  }
}