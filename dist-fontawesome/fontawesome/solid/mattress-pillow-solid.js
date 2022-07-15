import { h } from 'vue'
export default {
  $_icon: {
    name: "MattressPillow",
    vendor: "Fa",
    type: "Solid",
    tags: ["mattress","pillow"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 640 512","fill":"currentColor","data-name":"fa-mattress-pillow"},
      [ 
        h(
          "path",
          {"d":"M256 448H64C28.65 448 0 419.3 0 384V128C0 92.65 28.65 64 64 64H256V448zM64 352C64 369.7 78.33 384 96 384H160C177.7 384 192 369.7 192 352V160C192 142.3 177.7 128 160 128H96C78.33 128 64 142.3 64 160V352zM288 64H576C611.3 64 640 92.65 640 128V384C640 419.3 611.3 448 576 448H288V64z"}
        ) 
      ]
    )
  }
}