import { h } from 'vue'
export default {
  $_icon: {
    name: "Stairs",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["solid"],
    tags: ["stairs"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 576 512","fill":"currentColor","data-name":"fa-stairs"},
      [ 
        h(
          "path",
          {"d":"M576 64c0 17.67-14.31 32-32 32h-96v96c0 17.67-14.31 32-32 32h-96v96c0 17.67-14.31 32-32 32H192v96c0 17.67-14.31 32-32 32H32c-17.69 0-32-14.33-32-32s14.31-32 32-32h96v-96c0-17.67 14.31-32 32-32h96V192c0-17.67 14.31-32 32-32h96V64c0-17.67 14.31-32 32-32h128C561.7 32 576 46.33 576 64z"}
        ) 
      ]
    )
  }
}