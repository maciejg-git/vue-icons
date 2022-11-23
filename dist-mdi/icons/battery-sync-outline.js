import { h } from 'vue'
export default {
  $_icon: {
    name: "BatterySyncOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["battery","sync","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M13.54 22H7.33C6.6 22 6 21.4 6 20.67V5.33C6 4.6 6.6 4 7.33 4H9V2H15V4H16.67C17.4 4 18 4.6 18 5.33V12C17.3 12 16.63 12.13 16 12.35V6H8V20H12.35C12.61 20.75 13 21.42 13.54 22M18 13L20.25 15.25L18 17.5V16C16.15 16 14.94 17.96 15.76 19.62L14.67 20.71C12.91 18.05 14.81 14.5 18 14.5V13M18 24L15.75 21.75L18 19.5V21C19.85 21 21.06 19.04 20.24 17.38L21.33 16.29C23.09 18.95 21.19 22.5 18 22.5V24"}
        ) 
      ]
    )
  }
}