import { h } from 'vue'
export default {
  $_icon: {
    name: "CircleLeft",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["Regular"],
    tags: ["circle","left"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M48 256a208 208 0 1 1 416 0A208 208 0 1 1 48 256zm464 0A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM256 128l-32 0L96 256 224 384l32 0 0-80 128 0 0-96-128 0 0-80z"}
        ) 
      ]
    )
  }
}