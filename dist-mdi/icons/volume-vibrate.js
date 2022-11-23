import { h } from 'vue'
export default {
  $_icon: {
    name: "VolumeVibrate",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["volume","vibrate"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M4 9V15H8L13 20V4L8 9H4M16.55 2.47L15.5 3.53L17.93 6L15 9L17.93 12L15 15L17.93 18L15.5 20.47L16.55 21.53L20 18L17.07 15L20 12L17.07 9L20 6L16.55 2.47Z"}
        ) 
      ]
    )
  }
}