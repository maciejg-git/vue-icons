import { h } from 'vue'
export default {
  $_icon: {
    name: "Tape",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["Solid"],
    tags: ["tape"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 576 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M380.8 416c41.5-40.7 67.2-97.3 67.2-160C448 132.3 347.7 32 224 32S0 132.3 0 256S100.3 480 224 480l320 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-163.2 0zM224 160a96 96 0 1 1 0 192 96 96 0 1 1 0-192zm64 96a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z"}
        ) 
      ]
    )
  }
}