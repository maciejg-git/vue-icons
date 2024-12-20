import { h } from 'vue'
export default {
  $_icon: {
    name: "FlashlightOff",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["flashlight","off"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M2,5.27L3.28,4L20,20.72L18.73,22L15,18.27V22H9V12.27L2,5.27M18,5L15,10H11.82L6.82,5H18M18,4H6V2H18V4M15,11V13.18L12.82,11H15Z"}
        ) 
      ]
    )
  }
}