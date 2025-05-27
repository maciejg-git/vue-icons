import { h } from 'vue'
export default {
  $_icon: {
    name: "TallyMark2",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["tally","mark","2"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M11 19H9V5H11V19M15 5H13V19H15V5Z"}
        ) 
      ]
    )
  }
}