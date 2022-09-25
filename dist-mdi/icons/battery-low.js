import { h } from 'vue'
export default {
  $_icon: {
    name: "BatteryLow",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["battery","low"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-battery-low"},
      [ 
        h(
          "path",
          {"d":"M16 20H8V6H16M16.67 4H15V2H9V4H7.33C6.6 4 6 4.6 6 5.33V20.67C6 21.4 6.6 22 7.33 22H16.67C17.41 22 18 21.41 18 20.67V5.33C18 4.6 17.4 4 16.67 4M15 16H9V19H15V16"}
        ) 
      ]
    )
  }
}