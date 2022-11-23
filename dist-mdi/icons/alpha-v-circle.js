import { h } from 'vue'
export default {
  $_icon: {
    name: "AlphaVCircle",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["alpha","v","circle"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M9,7L11,17H13L15,7H13L12,12L11,7H9M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z"}
        ) 
      ]
    )
  }
}