import { h } from 'vue'
export default {
  $_icon: {
    name: "Vuejs",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["brands"],
    tags: ["vuejs"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 448 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M356.9 64.3H280l-56 88.6-48-88.6H0L224 448 448 64.3h-91.1zm-301.2 32h53.8L224 294.5 338.4 96.3h53.8L224 384.5 55.7 96.3z"}
        ) 
      ]
    )
  }
}