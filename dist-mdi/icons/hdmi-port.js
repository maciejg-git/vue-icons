import { h } from 'vue'
export default {
  $_icon: {
    name: "HdmiPort",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["hdmi","port"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M21 7H3C1.9 7 1 7.9 1 9V14C1 15.1 1.9 16 3 16H4L5.4 17.4C5.8 17.8 6.3 18 6.8 18H17.1C17.6 18 18.1 17.8 18.5 17.4L20 16H21C22.1 16 23 15.1 23 14V9C23 7.9 22.1 7 21 7M3 14V9H21V14H19.2L17.2 16H6.8L4.8 14H3M19 11H5V13H19V11Z"}
        ) 
      ]
    )
  }
}