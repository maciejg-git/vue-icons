import { h } from 'vue'
export default {
  $_icon: {
    name: "TurnUp",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["Solid"],
    tags: ["turn","up"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 384 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M178.3 5.7L40.3 143.7C35 149 32 156.2 32 163.7C32 179.3 44.7 192 60.3 192H144V400c0 8.8-7.2 16-16 16H32c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h96c61.9 0 112-50.1 112-112V192h83.7c15.6 0 28.3-12.7 28.3-28.3c0-7.5-3-14.7-8.3-20L205.7 5.7C202 2 197.1 0 192 0s-10 2-13.7 5.7z"}
        ) 
      ]
    )
  }
}