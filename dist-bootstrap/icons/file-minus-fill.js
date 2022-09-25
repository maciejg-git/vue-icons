import { h } from 'vue'
export default {
  $_icon: {
    name: "FileMinusFill",
    vendor: "B",
    license: "MIT",
    type: [],
    tags: ["file","minus","fill"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16","data-name":"b-file-minus-fill"},
      [ 
        h(
          "path",
          {"d":"M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM6 7.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1 0-1z"}
        ) 
      ]
    )
  }
}