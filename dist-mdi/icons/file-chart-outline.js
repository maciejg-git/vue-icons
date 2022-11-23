import { h } from 'vue'
export default {
  $_icon: {
    name: "FileChartOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["file","chart","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2M18 20H6V4H13V9H18V20M9 13V19H7V13H9M15 15V19H17V15H15M11 11V19H13V11H11Z"}
        ) 
      ]
    )
  }
}