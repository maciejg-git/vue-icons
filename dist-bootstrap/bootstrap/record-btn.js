import { h } from 'vue'
export default {
  $_icon: {
    name: "RecordBtn",
    vendor: "B",
    type: "",
    tags: ["record","btn"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16","data-name":"b-record-btn"},
      [ 
        h(
          "path",
          {"d":"M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}
        ),
        h(
          "path",
          {"d":"M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"}
        ) 
      ]
    )
  }
}