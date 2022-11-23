import { h } from 'vue'
export default {
  $_icon: {
    name: "P",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["solid"],
    tags: ["p"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 320 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M32 32H64h96c88.4 0 160 71.6 160 160s-71.6 160-160 160H64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V352 320 288 64C0 46.3 14.3 32 32 32zM64 288h96c53 0 96-43 96-96s-43-96-96-96H64V288z"}
        ) 
      ]
    )
  }
}