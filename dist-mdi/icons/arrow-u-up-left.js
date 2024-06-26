import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowUUpLeft",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["arrow","u","up","left"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M20 6V13.5C20 17.09 17.09 20 13.5 20S7 17.09 7 13.5V7.83L3.91 10.92L2.5 9.5L8 4L13.5 9.5L12.09 10.91L9 7.83V13.5C9 16 11 18 13.5 18S18 16 18 13.5V6H20Z"}
        ) 
      ]
    )
  }
}