import { h } from 'vue'
export default {
  $_icon: {
    name: "AxisZArrow",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["axis","z","arrow"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-axis-z-arrow"},
      [ 
        h(
          "path",
          {"d":"M12,2L16,6H13V13.82L22.39,19.25L21.39,21L12,15.56L2.61,21L1.61,19.25L11,13.82V6H8L12,2Z"}
        ) 
      ]
    )
  }
}