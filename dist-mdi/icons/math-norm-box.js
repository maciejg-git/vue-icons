import { h } from 'vue'
export default {
  $_icon: {
    name: "MathNormBox",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["math","norm","box"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-math-norm-box"},
      [ 
        h(
          "path",
          {"d":"M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M10 18H8V6H10V18M16 18H14V6H16V18Z"}
        ) 
      ]
    )
  }
}