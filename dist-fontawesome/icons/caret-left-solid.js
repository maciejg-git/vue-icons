import { h } from 'vue'
export default {
  $_icon: {
    name: "CaretLeft",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["Solid"],
    tags: ["caret","left"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z"}
        ) 
      ]
    )
  }
}