import { h } from 'vue'
export default {
  $_icon: {
    name: "ToriiGate",
    vendor: "Fa",
    type: ["solid"],
    tags: ["torii","gate"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512","fill":"currentColor","data-name":"fa-torii-gate"},
      [ 
        h(
          "path",
          {"d":"M0 80V0L71.37 23.79C87.68 29.23 104.8 32 121.1 32H390C407.2 32 424.3 29.23 440.6 23.79L512 0V80C512 106.5 490.5 128 464 128H448V192H384V128H288V192H224V128H128V192H64V128H48C21.49 128 0 106.5 0 80zM32 288C14.33 288 0 273.7 0 256C0 238.3 14.33 224 32 224H480C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H448V480C448 497.7 433.7 512 416 512C398.3 512 384 497.7 384 480V288H128V480C128 497.7 113.7 512 96 512C78.33 512 64 497.7 64 480V288H32z"}
        ) 
      ]
    )
  }
}