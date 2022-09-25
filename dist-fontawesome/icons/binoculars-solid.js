import { h } from 'vue'
export default {
  $_icon: {
    name: "Binoculars",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["solid"],
    tags: ["binoculars"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512","fill":"currentColor","data-name":"fa-binoculars"},
      [ 
        h(
          "path",
          {"d":"M416 48C416 39.13 408.9 32 400 32h-64C327.1 32 320 39.13 320 48V96h96.04L416 48zM63.88 160.1C61.34 253.9 3.5 274.3 0 404V448c0 17.6 14.4 32 32 32h128c17.6 0 32-14.4 32-32V128H95.88C78.26 128 64.35 142.5 63.88 160.1zM448.1 160.1C447.6 142.5 433.7 128 416.1 128H320v320c0 17.6 14.4 32 32 32h128c17.6 0 32-14.4 32-32v-44C508.5 274.3 450.7 253.9 448.1 160.1zM224 288h64V128H224V288zM176 32h-64C103.1 32 96 39.13 96 48L95.96 96H192V48C192 39.13 184.9 32 176 32z"}
        ) 
      ]
    )
  }
}