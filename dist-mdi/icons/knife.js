import { h } from 'vue'
export default {
  $_icon: {
    name: "Knife",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["knife"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M20.62,2C23.97,7.61 12.47,20.15 12.47,20.15L9.6,17.28L4.91,22L2.77,19.86L20.62,2Z"}
        ) 
      ]
    )
  }
}