import { h } from 'vue'
export default {
  $_icon: {
    name: "Water",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["water"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M12,20A6,6 0 0,1 6,14C6,10 12,3.25 12,3.25C12,3.25 18,10 18,14A6,6 0 0,1 12,20Z"}
        ) 
      ]
    )
  }
}