import { h } from 'vue'
export default {
  $_icon: {
    name: "HeadLightbulbOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["head","lightbulb","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-head-lightbulb-outline"},
      [ 
        h(
          "path",
          {"d":"M13 3C16.9 3 20 6.1 20 10C20 12.8 18.4 15.2 16 16.3V21H9V18H8C6.9 18 6 17.1 6 16V13H4.5C4.1 13 3.8 12.5 4.1 12.2L6 9.7C6.2 5.9 9.2 3 13 3M13 1C8.4 1 4.6 4.4 4.1 8.9L2.5 11C1.9 11.8 1.9 12.8 2.3 13.6C2.7 14.3 3.3 14.8 4 14.9V16C4 17.9 5.3 19.4 7 19.9V23H18V17.5C20.5 15.8 22 13.1 22 10C22 5 18 1 13 1M14 14H12V13H14V14M15.6 9.5C15.3 9.9 15 10.3 14.5 10.6V12H11.5V10.6C10.1 9.8 9.6 7.9 10.4 6.5S13.1 4.6 14.5 5.4 16.4 8.1 15.6 9.5Z"}
        ) 
      ]
    )
  }
}