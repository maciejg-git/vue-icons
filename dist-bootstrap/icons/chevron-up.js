import { h } from 'vue'
export default {
  $_icon: {
    name: "ChevronUp",
    vendor: "B",
    license: "MIT",
    type: [],
    tags: ["chevron","up"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16","data-name":"b-chevron-up"},
      [ 
        h(
          "path",
          {"fill-rule":"evenodd","d":"M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"}
        ) 
      ]
    )
  }
}