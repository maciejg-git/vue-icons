import { h } from 'vue'
export default {
  $_icon: {
    name: "GaugeSimpleHigh",
    vendor: "Fa",
    type: ["solid"],
    tags: ["gauge","simple","high"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512","fill":"currentColor","data-name":"fa-gauge-simple-high"},
      [ 
        h(
          "path",
          {"d":"M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM304.7 310.4L381.3 163.1C387.4 151.3 382.8 136.8 371.1 130.7C359.3 124.6 344.8 129.2 338.7 140.9L262.1 288.3C260.1 288.1 258.1 287.1 255.1 287.1C220.7 287.1 191.1 316.7 191.1 352C191.1 387.3 220.7 416 255.1 416C291.3 416 320 387.3 320 352C320 336.1 314.2 321.6 304.7 310.4L304.7 310.4z"}
        ) 
      ]
    )
  }
}