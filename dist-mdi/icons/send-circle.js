import { h } from 'vue'
export default {
  $_icon: {
    name: "SendCircle",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["send","circle"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M8,7.71V11.05L15.14,12L8,12.95V16.29L18,12L8,7.71Z"}
        ) 
      ]
    )
  }
}