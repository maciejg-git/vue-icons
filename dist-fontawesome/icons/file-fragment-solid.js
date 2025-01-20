import { h } from 'vue'
export default {
  $_icon: {
    name: "FileFragment",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["Solid"],
    tags: ["file","fragment"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 384 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64l-128 0 0-128c0-35.3-28.7-64-64-64L0 320 0 64zm384 64l-128 0L256 0 384 128zM32 352l96 0c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32l-96 0c-17.7 0-32-14.3-32-32l0-96c0-17.7 14.3-32 32-32z"}
        ) 
      ]
    )
  }
}