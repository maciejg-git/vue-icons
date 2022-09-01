import { h } from 'vue'
export default {
  $_icon: {
    name: "BatteryAlertBluetooth",
    vendor: "Mdi",
    type: [],
    tags: ["battery","alert","bluetooth"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-battery-alert-bluetooth"},
      [ 
        h(
          "path",
          {"d":"M5 2V4H3.3C2.6 4 2 4.6 2 5.3V20.6C2 21.4 2.6 22 3.3 22H12.6C13.3 22 13.9 21.4 13.9 20.7V5.3C14 4.6 13.4 4 12.7 4H11V2H5M19 8V11.8L16.7 9.5L16 10.2L18.8 13L16 15.8L16.7 16.5L19 14.2V18H19.5L22.4 15.1L20.2 13L22.3 10.9L19.5 8H19M7 8H9V14H7M20 9.9L20.9 10.8L20 11.8V9.9M20 14.2L20.9 15.1L20 16.1V14.2M7 16H9V18H7V16Z"}
        ) 
      ]
    )
  }
}