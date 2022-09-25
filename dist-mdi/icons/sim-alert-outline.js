import { h } from 'vue'
export default {
  $_icon: {
    name: "SimAlertOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["sim","alert","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-sim-alert-outline"},
      [ 
        h(
          "path",
          {"d":"M13 13H11V7H13M13 17H11V15H13M18 4V20H6V8.8L10.8 4H18M18 2H10L4 8V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V4C20 2.9 19.1 2 18 2Z"}
        ) 
      ]
    )
  }
}