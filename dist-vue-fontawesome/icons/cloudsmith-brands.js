import { h } from 'vue'
export default {
  $_icon: {
    name: "Cloudsmith",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["Brands"],
    tags: ["cloudsmith"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M512 227.6v56.9L284.4 512H227.6L0 284.4V227.6L227.6 0h56.9L512 227.6zm-256 162a133.6 133.6 0 1 0 0-267.1 133.6 133.6 0 1 0 0 267.1z"}
        ) 
      ]
    )
  }
}