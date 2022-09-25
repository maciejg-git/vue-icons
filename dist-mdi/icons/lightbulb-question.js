import { h } from 'vue'
export default {
  $_icon: {
    name: "LightbulbQuestion",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["lightbulb","question"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-lightbulb-question"},
      [ 
        h(
          "path",
          {"d":"M8 2C4.1 2 1 5.1 1 9C1 11.4 2.2 13.5 4 14.7V17C4 17.6 4.4 18 5 18H11C11.6 18 12 17.6 12 17V14.7C13.8 13.4 15 11.3 15 9C15 5.1 11.9 2 8 2M5 21C5 21.6 5.4 22 6 22H10C10.6 22 11 21.6 11 21V20H5V21M20.5 14.5V16H19V14.5H20.5M18.5 9.5H17V9C17 7.3 18.3 6 20 6S23 7.3 23 9C23 10 22.5 10.9 21.7 11.4L21.4 11.6C20.8 12 20.5 12.6 20.5 13.3V13.5H19V13.3C19 12.1 19.6 11 20.6 10.4L20.9 10.2C21.3 9.9 21.5 9.5 21.5 9C21.5 8.2 20.8 7.5 20 7.5S18.5 8.2 18.5 9V9.5Z"}
        ) 
      ]
    )
  }
}