import { h } from 'vue'
export default {
  $_icon: {
    name: "WaterMinusOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["water","minus","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M22 17V19H14V17H22M8 14C8 12.23 10 8.96 12 6.39C13.5 8.33 15 10.67 15.67 12.47C16.27 12.21 16.93 12.06 17.62 12C16.31 8.1 12 3.25 12 3.25S6 10 6 14C6 17.31 8.69 20 12 20C12.12 20 12.23 20 12.34 20C12.12 19.36 12 18.7 12 18C9.79 18 8 16.21 8 14Z"}
        ) 
      ]
    )
  }
}