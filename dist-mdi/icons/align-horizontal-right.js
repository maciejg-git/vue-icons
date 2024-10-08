import { h } from 'vue'
export default {
  $_icon: {
    name: "AlignHorizontalRight",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["align","horizontal","right"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M20 2H22V22H20V2M2 10H18V7H2V10M8 17H18V14H8V17Z"}
        ) 
      ]
    )
  }
}