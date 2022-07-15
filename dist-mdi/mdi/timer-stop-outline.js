import { h } from 'vue'
export default {
  $_icon: {
    name: "TimerStopOutline",
    vendor: "Mdi",
    type: "",
    tags: ["timer","stop","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-timer-stop-outline"},
      [ 
        h(
          "path",
          {"d":"M11 8H13V14H11V8M12 20C8.13 20 5 16.87 5 13S8.13 6 12 6 19 9.13 19 13C19.7 13 20.36 13.13 21 13.35C21 13.23 21 13.12 21 13C21 10.88 20.26 8.93 19.03 7.39L20.45 5.97C20 5.46 19.55 5 19.04 4.56L17.62 6C16.07 4.74 14.12 4 12 4C7.03 4 3 8.03 3 13S7.03 22 12 22C12.59 22 13.16 21.94 13.71 21.83C13.4 21.25 13.18 20.6 13.08 19.91C12.72 19.96 12.37 20 12 20M15 1H9V3H15V1M16.5 16.5V21.5H21.5V16.5H16.5Z"}
        ) 
      ]
    )
  }
}