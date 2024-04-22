import { h } from 'vue'
export default {
  $_icon: {
    name: "CircleSquare",
    vendor: "B",
    license: "MIT",
    type: [],
    tags: ["circle","square"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16"},
      [ 
        h(
          "path",
          {"d":"M0 6a6 6 0 1 1 12 0A6 6 0 0 1 0 6"}
        ),
        h(
          "path",
          {"d":"M12.93 5h1.57a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-1.57a7 7 0 0 1-1-.22v1.79A1.5 1.5 0 0 0 5.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 4h-1.79q.145.486.22 1"}
        ) 
      ]
    )
  }
}