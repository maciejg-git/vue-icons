import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowDownLong",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["solid"],
    tags: ["arrow","down","long"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 384 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M224 402.7V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V402.7L86.6 329.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7z"}
        ) 
      ]
    )
  }
}