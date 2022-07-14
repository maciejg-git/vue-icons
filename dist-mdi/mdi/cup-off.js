import { h } from 'vue'
export default {
  $_icon: {
    name: "CupOff",
    vendor: "Mdi",
    type: "",
    tags: ["cup","off"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-cup-off"},
      [ 
        h(
          "path",
          {"d":"M1,4.27L2.28,3L21,21.72L19.73,23L18.27,21.54C17.93,21.83 17.5,22 17,22H7C5.97,22 5.13,21.23 5,20.23L3.53,6.8L1,4.27M18.32,8L18.77,4H5.82L3.82,2H21L19.29,17.47L9.82,8H18.32Z"}
        ) 
      ]
    )
  }
}