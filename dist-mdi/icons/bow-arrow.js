import { h } from 'vue'
export default {
  $_icon: {
    name: "BowArrow",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["bow","arrow"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-bow-arrow"},
      [ 
        h(
          "path",
          {"d":"M19.03 6.03L20 7L22 2L17 4L17.97 4.97L16.15 6.79C10.87 2.16 3.3 3.94 2.97 4L2 4.26L2.5 6.2L3.29 6L10.12 12.82L6.94 16H5L2 19L4 20L5 22L8 19V17.06L11.18 13.88L18 20.71L17.81 21.5L19.74 22L20 21.03C20.06 20.7 21.84 13.13 17.21 7.85L19.03 6.03M4.5 5.78C6.55 5.5 11.28 5.28 14.73 8.21L10.82 12.12L4.5 5.78M18.22 19.5L11.88 13.18L15.79 9.27C18.72 12.72 18.5 17.45 18.22 19.5Z"}
        ) 
      ]
    )
  }
}