import { h } from 'vue'
export default {
  $_icon: {
    name: "Eject",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["eject"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M12,5L5.33,15H18.67M5,17H19V19H5V17Z"}
        ) 
      ]
    )
  }
}