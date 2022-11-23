import { h } from 'vue'
export default {
  $_icon: {
    name: "CellphoneArrowDown",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["cellphone","arrow","down"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M17,1H7A2,2 0 0,0 5,3V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3A2,2 0 0,0 17,1M17,19H7V5H17V19M16,13H13V8H11V13H8L12,17L16,13Z"}
        ) 
      ]
    )
  }
}