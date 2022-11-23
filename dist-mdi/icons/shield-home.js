import { h } from 'vue'
export default {
  $_icon: {
    name: "ShieldHome",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["shield","home"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M11,13H13V16H16V11H18L12,6L6,11H8V16H11V13M12,1L21,5V11C21,16.55 17.16,21.74 12,23C6.84,21.74 3,16.55 3,11V5L12,1Z"}
        ) 
      ]
    )
  }
}