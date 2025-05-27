import { h } from 'vue'
export default {
  $_icon: {
    name: "Archive",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["archive"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M3,3H21V7H3V3M4,8H20V21H4V8M9.5,11A0.5,0.5 0 0,0 9,11.5V13H15V11.5A0.5,0.5 0 0,0 14.5,11H9.5Z"}
        ) 
      ]
    )
  }
}