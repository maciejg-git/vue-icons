import { h } from 'vue'
export default {
  $_icon: {
    name: "1Circle",
    vendor: "B",
    type: "",
    tags: ["1","circle"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16","data-name":"b-1-circle"},
      [ 
        h(
          "path",
          {"d":"M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z"}
        ) 
      ]
    )
  }
}