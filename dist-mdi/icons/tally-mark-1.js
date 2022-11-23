import { h } from 'vue'
export default {
  $_icon: {
    name: "TallyMark1",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["tally","mark","1"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M13 19H11V5H13V19Z"}
        ) 
      ]
    )
  }
}