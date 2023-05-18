import { h } from 'vue'
export default {
  $_icon: {
    name: "FaceMehBlank",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["Regular"],
    tags: ["face","meh","blank"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M256 48a208 208 0 1 0 0 416 208 208 0 1 0 0-416zM512 256A256 256 0 1 1 0 256a256 256 0 1 1 512 0zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"}
        ) 
      ]
    )
  }
}