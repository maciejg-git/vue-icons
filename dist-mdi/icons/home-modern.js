import { h } from 'vue'
export default {
  $_icon: {
    name: "HomeModern",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["home","modern"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M6,21V8A2,2 0 0,1 8,6L16,3V6A2,2 0 0,1 18,8V21H12V16H8V21H6M14,19H16V16H14V19M8,13H10V9H8V13M12,13H16V9H12V13Z"}
        ) 
      ]
    )
  }
}