import { h } from 'vue'
export default {
  $_icon: {
    name: "AlphaHCircle",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["alpha","h","circle"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M9,7V17H11V13H13V17H15V7H13V11H11V7H9Z"}
        ) 
      ]
    )
  }
}