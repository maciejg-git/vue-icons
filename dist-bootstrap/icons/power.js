import { h } from 'vue'
export default {
  $_icon: {
    name: "Power",
    vendor: "B",
    license: "MIT",
    type: [],
    tags: ["power"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16","data-name":"b-power"},
      [ 
        h(
          "path",
          {"d":"M7.5 1v7h1V1h-1z"}
        ),
        h(
          "path",
          {"d":"M3 8.812a4.999 4.999 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812z"}
        ) 
      ]
    )
  }
}