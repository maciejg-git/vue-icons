import { h } from 'vue'
export default {
  $_icon: {
    name: "SegmentedNav",
    vendor: "B",
    license: "MIT",
    type: [],
    tags: ["segmented","nav"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16","data-name":"b-segmented-nav"},
      [ 
        h(
          "path",
          {"d":"M0 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6zm6 3h4V5H6v4zm9-1V6a1 1 0 0 0-1-1h-3v4h3a1 1 0 0 0 1-1z"}
        ) 
      ]
    )
  }
}