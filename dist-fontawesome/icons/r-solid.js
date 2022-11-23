import { h } from 'vue'
export default {
  $_icon: {
    name: "R",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["solid"],
    tags: ["r"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 320 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M32 32C14.3 32 0 46.3 0 64V288 448c0 17.7 14.3 32 32 32s32-14.3 32-32V320h95.3L261.8 466.4c10.1 14.5 30.1 18 44.6 7.9s18-30.1 7.9-44.6L230.1 309.5C282.8 288.1 320 236.4 320 176c0-79.5-64.5-144-144-144H32zM176 256H64V96H176c44.2 0 80 35.8 80 80s-35.8 80-80 80z"}
        ) 
      ]
    )
  }
}