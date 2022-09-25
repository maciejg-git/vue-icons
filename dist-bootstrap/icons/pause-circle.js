import { h } from 'vue'
export default {
  $_icon: {
    name: "PauseCircle",
    vendor: "B",
    license: "MIT",
    type: [],
    tags: ["pause","circle"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16","data-name":"b-pause-circle"},
      [ 
        h(
          "path",
          {"d":"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}
        ),
        h(
          "path",
          {"d":"M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5z"}
        ) 
      ]
    )
  }
}