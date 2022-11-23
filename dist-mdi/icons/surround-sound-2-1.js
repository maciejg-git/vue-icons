import { h } from 'vue'
export default {
  $_icon: {
    name: "SurroundSound21",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["surround","sound","2","1"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M4 7V9H8V11H6C4.9 11 4 11.9 4 13V17H10V15H6V13H8C9.1 13 10 12.1 10 11V9C10 7.9 9.1 7 8 7H4M14 17H12V15H14V17M16 7V9H18V17H20V7H16Z"}
        ) 
      ]
    )
  }
}