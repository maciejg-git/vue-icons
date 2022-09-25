import { h } from 'vue'
export default {
  $_icon: {
    name: "CircleDot",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["solid"],
    tags: ["circle","dot"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512","fill":"currentColor","data-name":"fa-circle-dot"},
      [ 
        h(
          "path",
          {"d":"M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 352C309 352 352 309 352 256C352 202.1 309 160 256 160C202.1 160 160 202.1 160 256C160 309 202.1 352 256 352z"}
        ) 
      ]
    )
  }
}