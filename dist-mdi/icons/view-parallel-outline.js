import { h } from 'vue'
export default {
  $_icon: {
    name: "ViewParallelOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["view","parallel","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-view-parallel-outline"},
      [ 
        h(
          "path",
          {"d":"M19 3H5V21H19V3M17 19H15V5H17V19M13 19H11V5H13V19M7 5H9V19H7V5Z"}
        ) 
      ]
    )
  }
}