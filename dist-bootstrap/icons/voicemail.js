import { h } from 'vue'
export default {
  $_icon: {
    name: "Voicemail",
    vendor: "B",
    license: "MIT",
    type: [],
    tags: ["voicemail"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16"},
      [ 
        h(
          "path",
          {"d":"M7 8.5A3.5 3.5 0 0 1 5.95 11h4.1a3.5 3.5 0 1 1 2.45 1h-9A3.5 3.5 0 1 1 7 8.5m-6 0a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0m14 0a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0"}
        ) 
      ]
    )
  }
}