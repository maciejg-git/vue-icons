import { h } from 'vue'
export default {
  $_icon: {
    name: "Clock",
    vendor: "B",
    type: [],
    tags: ["clock"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16","data-name":"b-clock"},
      [ 
        h(
          "path",
          {"d":"M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"}
        ),
        h(
          "path",
          {"d":"M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"}
        ) 
      ]
    )
  }
}