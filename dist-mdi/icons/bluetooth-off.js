import { h } from 'vue'
export default {
  $_icon: {
    name: "BluetoothOff",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["bluetooth","off"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-bluetooth-off"},
      [ 
        h(
          "path",
          {"d":"M13,5.83L14.88,7.71L13.28,9.31L14.69,10.72L17.71,7.7L12,2H11V7.03L13,9.03M5.41,4L4,5.41L10.59,12L5,17.59L6.41,19L11,14.41V22H12L16.29,17.71L18.59,20L20,18.59M13,18.17V14.41L14.88,16.29"}
        ) 
      ]
    )
  }
}