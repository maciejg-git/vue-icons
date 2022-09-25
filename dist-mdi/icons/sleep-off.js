import { h } from 'vue'
export default {
  $_icon: {
    name: "SleepOff",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["sleep","off"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-sleep-off"},
      [ 
        h(
          "path",
          {"d":"M2,5.27L3.28,4L20,20.72L18.73,22L12.73,16H9V14L9.79,13.06L2,5.27M23,12H17V10L20.39,6H17V4H23V6L19.62,10H23V12M9.82,8H15V10L13.54,11.72L9.82,8M7,20H1V18L4.39,14H1V12H7V14L3.62,18H7V20Z"}
        ) 
      ]
    )
  }
}