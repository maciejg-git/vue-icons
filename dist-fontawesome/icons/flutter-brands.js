import { h } from 'vue'
export default {
  $_icon: {
    name: "Flutter",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["Brands"],
    tags: ["flutter"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 448 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M429.5 236.3L291.7 374.1 429.5 512H272l-59.1-59.1-78.8-78.8L272 236.3H429.5zM272 0L16 256l78.8 78.8L429.5 0H272z"}
        ) 
      ]
    )
  }
}