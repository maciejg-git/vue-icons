import { h } from 'vue'
export default {
  $_icon: {
    name: "Indent",
    vendor: "B",
    type: "",
    tags: ["indent"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16","data-name":"b-indent"},
      [ 
        h(
          "path",
          {"fill-rule":"evenodd","d":"M3 8a.5.5 0 0 1 .5-.5h6.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H3.5A.5.5 0 0 1 3 8Z"}
        ),
        h(
          "path",
          {"fill-rule":"evenodd","d":"M12.5 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5Z"}
        ) 
      ]
    )
  }
}