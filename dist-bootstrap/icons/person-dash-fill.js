import { h } from 'vue'
export default {
  $_icon: {
    name: "PersonDashFill",
    vendor: "B",
    license: "MIT",
    type: [],
    tags: ["person","dash","fill"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16","data-name":"b-person-dash-fill"},
      [ 
        h(
          "path",
          {"fill-rule":"evenodd","d":"M11 7.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z"}
        ),
        h(
          "path",
          {"d":"M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}
        ) 
      ]
    )
  }
}