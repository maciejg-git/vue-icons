import { h } from 'vue'
export default {
  $_icon: {
    name: "Monero",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["brands"],
    tags: ["monero"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 496 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M352 384h108.4C417 455.9 338.1 504 248 504S79 455.9 35.6 384H144V256.2L248 361l104-105v128zM88 336V128l159.4 159.4L408 128v208h74.8c8.5-25.1 13.2-52 13.2-80C496 119 385 8 248 8S0 119 0 256c0 28 4.6 54.9 13.2 80H88z"}
        ) 
      ]
    )
  }
}