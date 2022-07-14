import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowUpRightCircleFill",
    vendor: "B",
    type: "",
    tags: ["arrow","up","right","circle","fill"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16","data-name":"b-arrow-up-right-circle-fill"},
      [ 
        h(
          "path",
          {"d":"M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8zm5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707l-4.096 4.096z"}
        ) 
      ]
    )
  }
}