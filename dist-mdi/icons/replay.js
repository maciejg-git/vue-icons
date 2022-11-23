import { h } from 'vue'
export default {
  $_icon: {
    name: "Replay",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["replay"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M12,5V1L7,6L12,11V7A6,6 0 0,1 18,13A6,6 0 0,1 12,19A6,6 0 0,1 6,13H4A8,8 0 0,0 12,21A8,8 0 0,0 20,13A8,8 0 0,0 12,5Z"}
        ) 
      ]
    )
  }
}