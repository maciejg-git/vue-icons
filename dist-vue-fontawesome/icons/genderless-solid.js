import { h } from 'vue'
export default {
  $_icon: {
    name: "Genderless",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["Solid"],
    tags: ["genderless"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 384 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M192 144a112 112 0 1 1 0 224 112 112 0 1 1 0-224zm0 288a176 176 0 1 0 0-352 176 176 0 1 0 0 352z"}
        ) 
      ]
    )
  }
}