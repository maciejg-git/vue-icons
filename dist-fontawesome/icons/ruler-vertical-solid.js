import { h } from 'vue'
export default {
  $_icon: {
    name: "RulerVertical",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["solid"],
    tags: ["ruler","vertical"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 512","fill":"currentColor","data-name":"fa-ruler-vertical"},
      [ 
        h(
          "path",
          {"d":"M0 48C0 21.49 21.49 0 48 0H208C234.5 0 256 21.49 256 48V96H176C167.2 96 160 103.2 160 112C160 120.8 167.2 128 176 128H256V192H176C167.2 192 160 199.2 160 208C160 216.8 167.2 224 176 224H256V288H176C167.2 288 160 295.2 160 304C160 312.8 167.2 320 176 320H256V384H176C167.2 384 160 391.2 160 400C160 408.8 167.2 416 176 416H256V464C256 490.5 234.5 512 208 512H48C21.49 512 0 490.5 0 464V48z"}
        ) 
      ]
    )
  }
}