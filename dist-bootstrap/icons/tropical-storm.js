import { h } from 'vue'
export default {
  $_icon: {
    name: "TropicalStorm",
    vendor: "B",
    license: "MIT",
    type: [],
    tags: ["tropical","storm"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16"},
      [ 
        h(
          "path",
          {"d":"M8 9.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4"}
        ),
        h(
          "path",
          {"d":"M9.5 2c-.9 0-1.75.216-2.501.6A5 5 0 0 1 13 7.5a6.5 6.5 0 1 1-13 0 .5.5 0 0 1 1 0 5.5 5.5 0 0 0 8.001 4.9A5 5 0 0 1 3 7.5a6.5 6.5 0 0 1 13 0 .5.5 0 0 1-1 0A5.5 5.5 0 0 0 9.5 2M8 3.5a4 4 0 1 0 0 8 4 4 0 0 0 0-8"}
        ) 
      ]
    )
  }
}