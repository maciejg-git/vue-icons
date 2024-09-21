import { h } from 'vue'
export default {
  $_icon: {
    name: "CircleDown",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["Regular"],
    tags: ["circle","down"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M256 464a208 208 0 1 1 0-416 208 208 0 1 1 0 416zM256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM128 256l0 32L256 416 384 288l0-32-80 0 0-128-96 0 0 128-80 0z"}
        ) 
      ]
    )
  }
}