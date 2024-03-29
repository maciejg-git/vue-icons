import { h } from 'vue'
export default {
  $_icon: {
    name: "ShieldHalf",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["shield","half"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M12 1L3 5V11C3 16.5 6.8 21.7 12 23V1Z"}
        ) 
      ]
    )
  }
}