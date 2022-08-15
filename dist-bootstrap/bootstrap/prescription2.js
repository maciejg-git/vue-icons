import { h } from 'vue'
export default {
  $_icon: {
    name: "Prescription2",
    vendor: "B",
    type: "",
    tags: ["prescription2"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16","data-name":"b-prescription2"},
      [ 
        h(
          "path",
          {"d":"M7 6h2v2h2v2H9v2H7v-2H5V8h2V6Z"}
        ),
        h(
          "path",
          {"fill-rule":"evenodd","d":"M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v10.5a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 14.5V4a1 1 0 0 1-1-1V1Zm2 3h8v10.5a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5V4ZM3 3V1h10v2H3Z"}
        ) 
      ]
    )
  }
}