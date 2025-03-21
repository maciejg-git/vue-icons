import { h } from 'vue'
export default {
  $_icon: {
    name: "BatteryCharging40",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["battery","charging","40"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M13 4H11V2H5V4H3C2.4 4 2 4.4 2 5V21C2 21.6 2.4 22 3 22H13C13.6 22 14 21.6 14 21V5C14 4.4 13.6 4 13 4M12 14.5H4V6H12V14.5M23 11H20V4L15 14H18V22"}
        ) 
      ]
    )
  }
}