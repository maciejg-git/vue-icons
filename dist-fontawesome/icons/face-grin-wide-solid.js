import { h } from 'vue'
export default {
  $_icon: {
    name: "FaceGrinWide",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["solid"],
    tags: ["face","grin","wide"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512","fill":"currentColor","data-name":"fa-face-grin-wide"},
      [ 
        h(
          "path",
          {"d":"M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256.3 331.8C208.9 331.8 164.1 324.9 124.5 312.8C112.2 309 100.2 319.7 105.2 331.5C130.1 390.6 188.4 432 256.3 432C324.2 432 382.4 390.6 407.4 331.5C412.4 319.7 400.4 309 388.1 312.8C348.4 324.9 303.7 331.8 256.3 331.8H256.3zM176 128C158.3 128 144 156.7 144 192C144 227.3 158.3 256 176 256C193.7 256 208 227.3 208 192C208 156.7 193.7 128 176 128zM336 256C353.7 256 368 227.3 368 192C368 156.7 353.7 128 336 128C318.3 128 304 156.7 304 192C304 227.3 318.3 256 336 256z"}
        ) 
      ]
    )
  }
}