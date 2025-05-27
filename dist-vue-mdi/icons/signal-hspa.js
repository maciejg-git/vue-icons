import { h } from 'vue'
export default {
  $_icon: {
    name: "SignalHspa",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["signal","hspa"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M10.5,10.5H13.5V4.5H16.5V19.5H13.5V13.5H10.5V19.5H7.5V4.5H10.5V10.5Z"}
        ) 
      ]
    )
  }
}