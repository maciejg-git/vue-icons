import { h } from 'vue'
export default {
  $_icon: {
    name: "TurnDown",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["solid"],
    tags: ["turn","down"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 384 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M178.3 506.3L40.3 368.3C35 363 32 355.8 32 348.3C32 332.7 44.7 320 60.3 320H144V112c0-8.8-7.2-16-16-16H32C14.3 96 0 81.7 0 64V32C0 14.3 14.3 0 32 0h96c61.9 0 112 50.1 112 112V320h83.7c15.6 0 28.3 12.7 28.3 28.3c0 7.5-3 14.7-8.3 20L205.7 506.3C202 510 197.1 512 192 512s-10-2-13.7-5.7z"}
        ) 
      ]
    )
  }
}