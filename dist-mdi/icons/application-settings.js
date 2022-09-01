import { h } from 'vue'
export default {
  $_icon: {
    name: "ApplicationSettings",
    vendor: "Mdi",
    type: [],
    tags: ["application","settings"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-application-settings"},
      [ 
        h(
          "path",
          {"d":"M21 0H3C1.9 0 1 .9 1 2V18C1 19.1 1.9 20 3 20H21C22.1 20 23 19.1 23 18V2C23 .9 22.1 0 21 0M21 5H3V2H21V5M7 22H9V24H7V22M11 22H13V24H11V22M15 22H17V24H15V22"}
        ) 
      ]
    )
  }
}