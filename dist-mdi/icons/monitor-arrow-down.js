import { h } from 'vue'
export default {
  $_icon: {
    name: "MonitorArrowDown",
    vendor: "Mdi",
    type: [],
    tags: ["monitor","arrow","down"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-monitor-arrow-down"},
      [ 
        h(
          "path",
          {"d":"M21 16H3V4H21M21 2H3C1.9 2 1 2.9 1 4V16C1 17.1 1.9 18 3 18H10V20H8V22H16V20H14V18H21C22.1 18 23 17.1 23 16V4C23 2.9 22.1 2 21 2M16 10H13V6H11V10H8L12 14L16 10"}
        ) 
      ]
    )
  }
}