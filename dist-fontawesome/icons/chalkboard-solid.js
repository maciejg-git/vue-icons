import { h } from 'vue'
export default {
  $_icon: {
    name: "Chalkboard",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["Solid"],
    tags: ["chalkboard"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 576 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M96 32C60.7 32 32 60.7 32 96l0 288 64 0L96 96l384 0 0 288 64 0 0-288c0-35.3-28.7-64-64-64L96 32zM224 384l0 32L32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l512 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-128 0 0-32c0-17.7-14.3-32-32-32l-128 0c-17.7 0-32 14.3-32 32z"}
        ) 
      ]
    )
  }
}