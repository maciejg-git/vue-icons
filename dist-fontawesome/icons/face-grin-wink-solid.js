import { h } from 'vue'
export default {
  $_icon: {
    name: "FaceGrinWink",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["solid"],
    tags: ["face","grin","wink"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512","fill":"currentColor","data-name":"fa-face-grin-wink"},
      [ 
        h(
          "path",
          {"d":"M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256.3 331.8C208.9 331.8 164.1 324.9 124.5 312.8C112.2 309 100.2 319.7 105.2 331.5C130.1 390.6 188.4 432 256.3 432C324.2 432 382.4 390.6 407.4 331.5C412.4 319.7 400.4 309 388.1 312.8C348.4 324.9 303.7 331.8 256.3 331.8H256.3zM393.6 236.8C400.7 231.5 402.1 221.5 396.8 214.4C366.4 173.9 305.6 173.9 275.2 214.4C269.9 221.5 271.3 231.5 278.4 236.8C285.5 242.1 295.5 240.7 300.8 233.6C318.4 210.1 353.6 210.1 371.2 233.6C376.5 240.7 386.5 242.1 393.6 236.8zM176.4 240C194 240 208.4 225.7 208.4 208C208.4 190.3 194 176 176.4 176C158.7 176 144.4 190.3 144.4 208C144.4 225.7 158.7 240 176.4 240z"}
        ) 
      ]
    )
  }
}