import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowUpLeftCircleFill",
    vendor: "B",
    license: "MIT",
    type: [],
    tags: ["arrow","up","left","circle","fill"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16","data-name":"b-arrow-up-left-circle-fill"},
      [ 
        h(
          "path",
          {"d":"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-5.904 2.803a.5.5 0 1 0 .707-.707L6.707 6h2.768a.5.5 0 1 0 0-1H5.5a.5.5 0 0 0-.5.5v3.975a.5.5 0 0 0 1 0V6.707l4.096 4.096z"}
        ) 
      ]
    )
  }
}