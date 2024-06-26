import { h } from 'vue'
export default {
  $_icon: {
    name: "Sd",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["sd"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M18,8H16V4H18M15,8H13V4H15M12,8H10V4H12M18,2H10L4,8V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V4A2,2 0 0,0 18,2Z"}
        ) 
      ]
    )
  }
}