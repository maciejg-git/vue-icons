import { h } from 'vue'
export default {
  $_icon: {
    name: "ChartSankey",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["chart","sankey"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M22 5H4V2H2V22H22V20H4V9C8.09 9 10.13 11 12.29 13.21S17.09 18 22 18V16C17.91 16 15.87 14 13.71 11.79S8.91 7 4 7H22Z"}
        ) 
      ]
    )
  }
}