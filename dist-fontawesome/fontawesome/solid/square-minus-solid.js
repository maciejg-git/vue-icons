import { h } from 'vue'
export default {
  $_icon: {
    name: "SquareMinus",
    vendor: "Fa",
    type: "Solid",
    tags: ["square","minus"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 448 512","fill":"currentColor","data-name":"fa-square-minus"},
      [ 
        h(
          "path",
          {"d":"M384 32C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384zM136 232C122.7 232 112 242.7 112 256C112 269.3 122.7 280 136 280H312C325.3 280 336 269.3 336 256C336 242.7 325.3 232 312 232H136z"}
        ) 
      ]
    )
  }
}