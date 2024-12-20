import { h } from 'vue'
export default {
  $_icon: {
    name: "ToggleOn",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["Solid"],
    tags: ["toggle","on"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 576 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M192 64C86 64 0 150 0 256S86 448 192 448l192 0c106 0 192-86 192-192s-86-192-192-192L192 64zm192 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"}
        ) 
      ]
    )
  }
}