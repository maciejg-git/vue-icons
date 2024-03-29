import { h } from 'vue'
export default {
  $_icon: {
    name: "Seat",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["seat"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M4,18V21H7V18H17V21H20V15H4V18M19,10H22V13H19V10M2,10H5V13H2V10M17,13H7V5A2,2 0 0,1 9,3H15A2,2 0 0,1 17,5V13Z"}
        ) 
      ]
    )
  }
}