import { h } from 'vue'
export default {
  $_icon: {
    name: "BatteryClockOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["battery","clock","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M18 9.29V5.33C18 4.6 17.4 4 16.67 4H15V2H9V4H7.33C6.6 4 6 4.6 6 5.33V20.67C6 21.4 6.6 22 7.33 22H12.41C13.46 22.63 14.69 23 16 23C19.87 23 23 19.87 23 16C23 12.83 20.89 10.15 18 9.29M8 6H16V9C12.13 9 9 12.13 9 16C9 17.5 9.47 18.87 10.26 20H8V6M16 21C13.24 21 11 18.76 11 16S13.24 11 16 11 21 13.24 21 16 18.76 21 16 21M16.5 16.25L19.36 17.94L18.61 19.16L15 17V12H16.5V16.25Z"}
        ) 
      ]
    )
  }
}