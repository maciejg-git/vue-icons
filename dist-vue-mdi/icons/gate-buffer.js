import { h } from 'vue'
export default {
  $_icon: {
    name: "GateBuffer",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["gate","buffer"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M6 7.24L15.53 12L6 16.76V7.24M4 4V20L20 12L4 4Z"}
        ) 
      ]
    )
  }
}