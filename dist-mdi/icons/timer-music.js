import { h } from 'vue'
export default {
  $_icon: {
    name: "TimerMusic",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["timer","music"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-timer-music"},
      [ 
        h(
          "path",
          {"d":"M16.5 16.11V11H20.77C20.46 9.66 19.86 8.43 19.03 7.39L20.45 5.97C20 5.46 19.55 5 19.04 4.56L17.62 6C16.07 4.74 14.12 4 12 4C7.03 4 3 8.03 3 13S7.03 22 12 22C12.42 22 12.83 21.96 13.24 21.91C13.09 21.46 13 21 13 20.5C13 18.36 14.5 16.57 16.5 16.11M13 14H11V7H13V14M15 3H9V1H15V3M22 13V15H20V20.5C20 21.88 18.88 23 17.5 23S15 21.88 15 20.5 16.12 18 17.5 18C17.86 18 18.19 18.07 18.5 18.21V13H22Z"}
        ) 
      ]
    )
  }
}