import { h } from 'vue'
export default {
  $_icon: {
    name: "MinusBoxOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["minus","box","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M19,19V5H5V19H19M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5C3,3.89 3.9,3 5,3H19M17,11V13H7V11H17Z"}
        ) 
      ]
    )
  }
}