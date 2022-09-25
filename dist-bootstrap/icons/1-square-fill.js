import { h } from 'vue'
export default {
  $_icon: {
    name: "1SquareFill",
    vendor: "B",
    license: "MIT",
    type: [],
    tags: ["1","square","fill"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16","data-name":"b-1-square-fill"},
      [ 
        h(
          "path",
          {"d":"M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Zm7.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z"}
        ) 
      ]
    )
  }
}