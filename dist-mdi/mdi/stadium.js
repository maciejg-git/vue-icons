import { h } from 'vue'
export default {
  $_icon: {
    name: "Stadium",
    vendor: "Mdi",
    type: "",
    tags: ["stadium"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-stadium"},
      [ 
        h(
          "path",
          {"d":"M7 5L3 7V3L7 5M18 3V7L22 5L18 3M11 2V6L15 4L11 2M5 10C6.4 10.5 8.8 11 12 11S17.6 10.5 19 10C19 9.8 16.2 9 12 9S5 9.9 5 10M15 17H9V21.9C4.9 21.5 2 20.4 2 19V10C2 8.3 6.5 7 12 7S22 8.3 22 10V19C22 20.3 19.1 21.5 15 21.9V17Z"}
        ) 
      ]
    )
  }
}