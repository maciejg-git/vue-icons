import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowReturnLeft",
    vendor: "B",
    type: [],
    tags: ["arrow","return","left"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16","data-name":"b-arrow-return-left"},
      [ 
        h(
          "path",
          {"fill-rule":"evenodd","d":"M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"}
        ) 
      ]
    )
  }
}