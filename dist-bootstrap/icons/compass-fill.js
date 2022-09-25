import { h } from 'vue'
export default {
  $_icon: {
    name: "CompassFill",
    vendor: "B",
    license: "MIT",
    type: [],
    tags: ["compass","fill"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16","data-name":"b-compass-fill"},
      [ 
        h(
          "path",
          {"d":"M15.5 8.516a7.5 7.5 0 1 1-9.462-7.24A1 1 0 0 1 7 0h2a1 1 0 0 1 .962 1.276 7.503 7.503 0 0 1 5.538 7.24zm-3.61-3.905L6.94 7.439 4.11 12.39l4.95-2.828 2.828-4.95z"}
        ) 
      ]
    )
  }
}