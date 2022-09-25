import { h } from 'vue'
export default {
  $_icon: {
    name: "D",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["solid"],
    tags: ["d"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 384 512","fill":"currentColor","data-name":"fa-d"},
      [ 
        h(
          "path",
          {"d":"M160 32.01L32 32.01c-17.67 0-32 14.33-32 32v384c0 17.67 14.33 32 32 32l128-.0073c123.5 0 224-100.5 224-224S283.5 32.01 160 32.01zM160 416H64v-320h96c88.22 0 160 71.78 160 159.1S248.2 416 160 416z"}
        ) 
      ]
    )
  }
}