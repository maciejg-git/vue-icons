import { h } from 'vue'
export default {
  $_icon: {
    name: "Amd",
    vendor: "B",
    license: "MIT",
    type: [],
    tags: ["amd"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16"},
      [ 
        h(
          "path",
          {"d":"m.334 0 4.358 4.359h7.15v7.15l4.358 4.358V0H.334ZM.2 9.72l4.487-4.488v6.281h6.28L6.48 16H.2V9.72Z"}
        ) 
      ]
    )
  }
}