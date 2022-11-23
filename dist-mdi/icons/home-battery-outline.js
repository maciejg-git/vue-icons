import { h } from 'vue'
export default {
  $_icon: {
    name: "HomeBatteryOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["home","battery","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M15 9H16V7.5H20V9H21C21.55 9 22 9.45 22 10V21C22 21.55 21.55 22 21 22H15C14.45 22 14 21.55 14 21V10C14 9.45 14.45 9 15 9M16 11V14H20V11H16M12 5.69L7 10.19V18H12V20H5V12H2L12 3L14.78 5.5H14V7.17L13.76 7.27L12 5.69Z"}
        ) 
      ]
    )
  }
}