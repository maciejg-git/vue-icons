import { h } from 'vue'
export default {
  $_icon: {
    name: "FormatListBulletedType",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["format","list","bulleted","type"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M5,9.5L7.5,14H2.5L5,9.5M3,4H7V8H3V4M5,20A2,2 0 0,0 7,18A2,2 0 0,0 5,16A2,2 0 0,0 3,18A2,2 0 0,0 5,20M9,5V7H21V5H9M9,19H21V17H9V19M9,13H21V11H9V13Z"}
        ) 
      ]
    )
  }
}