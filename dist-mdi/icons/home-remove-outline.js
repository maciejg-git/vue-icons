import { h } from 'vue'
export default {
  $_icon: {
    name: "HomeRemoveOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["home","remove","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-home-remove-outline"},
      [ 
        h(
          "path",
          {"d":"M14.46 15.88L15.88 14.46L18 16.59L20.12 14.47L21.54 15.88L19.41 18L21.54 20.12L20.12 21.54L18 19.41L15.88 21.54L14.46 20.12L16.59 18L14.47 15.88M5 20V12H2L12 3L22 12H17V10.19L12 5.69L7 10.19V18H12C12 18.7 12.12 19.37 12.34 20H5Z"}
        ) 
      ]
    )
  }
}