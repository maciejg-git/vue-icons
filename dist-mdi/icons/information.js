import { h } from 'vue'
export default {
  $_icon: {
    name: "Information",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["information"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"}
        ) 
      ]
    )
  }
}