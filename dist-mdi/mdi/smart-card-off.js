import { h } from 'vue'
export default {
  $_icon: {
    name: "SmartCardOff",
    vendor: "Mdi",
    type: "",
    tags: ["smart","card","off"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-smart-card-off"},
      [ 
        h(
          "path",
          {"d":"M2.39 1.73L1.11 3L1.27 3.16C.545 3.47 .028 4.17 0 5V19C.036 20.09 .911 20.96 2 21H19.11L20.84 22.73L22.11 21.46L2.39 1.73M14 18H2V17C2 15 6 13.91 8 13.91S14 15 14 17V18M8 12C6.34 12 5 10.66 5 9C5 8.4 5.18 7.84 5.5 7.38L9.62 11.5C9.16 11.82 8.6 12 8 12M22 3H6.2L9.88 6.68C10.04 6.81 10.19 6.96 10.32 7.12L23.5 20.29C23.79 19.94 24 19.5 24 19V5C23.96 3.91 23.09 3.04 22 3M21 13H17V10H21V13Z"}
        ) 
      ]
    )
  }
}