import { h } from 'vue'
export default {
  $_icon: {
    name: "CircleStop",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["Solid"],
    tags: ["circle","stop"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM192 160l128 0c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32l0-128c0-17.7 14.3-32 32-32z"}
        ) 
      ]
    )
  }
}