import { h } from 'vue'
export default {
  $_icon: {
    name: "Microsoft",
    vendor: "B",
    license: "MIT",
    type: [],
    tags: ["microsoft"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16"},
      [ 
        h(
          "path",
          {"d":"M7.462 0H0v7.19h7.462V0zM16 0H8.538v7.19H16V0zM7.462 8.211H0V16h7.462V8.211zm8.538 0H8.538V16H16V8.211z"}
        ) 
      ]
    )
  }
}