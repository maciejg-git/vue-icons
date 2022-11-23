import { h } from 'vue'
export default {
  $_icon: {
    name: "O",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["solid"],
    tags: ["o"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 448 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M224 96C135.6 96 64 167.6 64 256s71.6 160 160 160s160-71.6 160-160s-71.6-160-160-160zM0 256C0 132.3 100.3 32 224 32s224 100.3 224 224s-100.3 224-224 224S0 379.7 0 256z"}
        ) 
      ]
    )
  }
}