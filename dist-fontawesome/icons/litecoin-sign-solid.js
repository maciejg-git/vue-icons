import { h } from 'vue'
export default {
  $_icon: {
    name: "LitecoinSign",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["solid"],
    tags: ["litecoin","sign"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 448 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M160 64c0-17.7-14.3-32-32-32s-32 14.3-32 32V213.6L55.2 225.2c-17 4.9-26.8 22.6-22 39.6s22.6 26.8 39.6 22L96 280.1V448c0 17.7 14.3 32 32 32H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H160V261.9l136.8-39.1c17-4.9 26.8-22.6 22-39.6s-22.6-26.8-39.6-22L160 195.3V64z"}
        ) 
      ]
    )
  }
}