import { h } from 'vue'
export default {
  $_icon: {
    name: "TengeSign",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["Solid"],
    tags: ["tenge","sign"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 384 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M0 64C0 46.3 14.3 32 32 32l320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64zM0 192c0-17.7 14.3-32 32-32l160 0 160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-128 0 0 224c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-224L32 224c-17.7 0-32-14.3-32-32z"}
        ) 
      ]
    )
  }
}