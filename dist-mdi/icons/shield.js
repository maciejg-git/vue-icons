import { h } from 'vue'
export default {
  $_icon: {
    name: "Shield",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["shield"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1Z"}
        ) 
      ]
    )
  }
}