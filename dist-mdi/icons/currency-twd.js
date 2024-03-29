import { h } from 'vue'
export default {
  $_icon: {
    name: "CurrencyTwd",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["currency","twd"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M3,11H21V13H15V19H21V21H15A2,2 0 0,1 13,19V13H10.35L5.73,21L4,20L8.04,13H3V11M5,3H19V5H5V3Z"}
        ) 
      ]
    )
  }
}