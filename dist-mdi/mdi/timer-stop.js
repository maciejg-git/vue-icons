import { h } from 'vue'
export default {
  $_icon: {
    name: "TimerStop",
    vendor: "Mdi",
    type: "",
    tags: ["timer","stop"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-timer-stop"},
      [ 
        h(
          "path",
          {"d":"M19 13C19.7 13 20.36 13.13 21 13.35C21 13.23 21 13.12 21 13C21 10.88 20.26 8.93 19.03 7.39L20.45 5.97C20 5.46 19.55 5 19.04 4.56L17.62 6C16.07 4.74 14.12 4 12 4C7.03 4 3 8.03 3 13S7.03 22 12 22C12.59 22 13.16 21.94 13.71 21.83C13.26 21 13 20.03 13 19C13 15.69 15.69 13 19 13M13 14H11V7H13V14M15 3H9V1H15V3M21.5 16.5V21.5H16.5V16.5H21.5Z"}
        ) 
      ]
    )
  }
}