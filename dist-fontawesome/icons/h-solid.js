import { h } from 'vue'
export default {
  $_icon: {
    name: "H",
    vendor: "Fa",
    type: ["solid"],
    tags: ["h"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 384 512","fill":"currentColor","data-name":"fa-h"},
      [ 
        h(
          "path",
          {"d":"M384 64.01v384c0 17.67-14.33 32-32 32s-32-14.33-32-32v-192H64v192c0 17.67-14.33 32-32 32s-32-14.33-32-32v-384C0 46.34 14.33 32.01 32 32.01S64 46.34 64 64.01v128h256v-128c0-17.67 14.33-32 32-32S384 46.34 384 64.01z"}
        ) 
      ]
    )
  }
}