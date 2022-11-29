import { h } from 'vue'
export default {
  $_icon: {
    name: "MinusSmall",
    vendor: "H",
    license: "MIT",
    type: ["20","Solid"],
    tags: ["minus","small"],
  },
  render() {
    return h(
      "svg",
      {"width":"20","height":"20","viewBox":"0 0 20 20","fill":"currentColor","xmlns":"http://www.w3.org/2000/svg"},
      [ 
        h(
          "path",
          {"d":"M6.75 9.25C6.33579 9.25 6 9.58579 6 10C6 10.4142 6.33579 10.75 6.75 10.75L13.25 10.75C13.6642 10.75 14 10.4142 14 10C14 9.58579 13.6642 9.25 13.25 9.25H6.75Z","fill":"#0F172A"}
        ) 
      ]
    )
  }
}