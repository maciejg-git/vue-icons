import { h } from 'vue'
export default {
  $_icon: {
    name: "AxisYArrow",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["axis","y","arrow"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M22.5,20.5L17,21.96L18.53,19.35L12,15.58L2.61,21L1.61,19.27L11,13.85V3H13V13.85L19.53,17.61L21,15.03L22.5,20.5Z"}
        ) 
      ]
    )
  }
}