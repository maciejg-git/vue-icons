import { h } from 'vue'
export default {
  $_icon: {
    name: "Plug",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["solid"],
    tags: ["plug"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 384 512","fill":"currentColor","data-name":"fa-plug"},
      [ 
        h(
          "path",
          {"d":"M96 0C113.7 0 128 14.33 128 32V128H64V32C64 14.33 78.33 0 96 0zM288 0C305.7 0 320 14.33 320 32V128H256V32C256 14.33 270.3 0 288 0zM352 160C369.7 160 384 174.3 384 192C384 209.7 369.7 224 352 224V256C352 333.4 297 397.1 224 412.8V512H160V412.8C86.97 397.1 32 333.4 32 256V224C14.33 224 0 209.7 0 192C0 174.3 14.33 160 32 160H352z"}
        ) 
      ]
    )
  }
}