import { h } from 'vue'
export default {
  $_icon: {
    name: "DashCircleFill",
    vendor: "B",
    license: "MIT",
    type: [],
    tags: ["dash","circle","fill"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16"},
      [ 
        h(
          "path",
          {"d":"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1z"}
        ) 
      ]
    )
  }
}