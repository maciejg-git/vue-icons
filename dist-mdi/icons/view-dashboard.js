import { h } from 'vue'
export default {
  $_icon: {
    name: "ViewDashboard",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["view","dashboard"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M13,3V9H21V3M13,21H21V11H13M3,21H11V15H3M3,13H11V3H3V13Z"}
        ) 
      ]
    )
  }
}