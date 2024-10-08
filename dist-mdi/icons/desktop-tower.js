import { h } from 'vue'
export default {
  $_icon: {
    name: "DesktopTower",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["desktop","tower"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M8,2H16A2,2 0 0,1 18,4V20A2,2 0 0,1 16,22H8A2,2 0 0,1 6,20V4A2,2 0 0,1 8,2M8,4V6H16V4H8M16,8H8V10H16V8M16,18H14V20H16V18Z"}
        ) 
      ]
    )
  }
}