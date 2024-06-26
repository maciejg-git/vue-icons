import { h } from 'vue'
export default {
  $_icon: {
    name: "TableRow",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["table","row"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M22,14A2,2 0 0,1 20,16H4A2,2 0 0,1 2,14V10A2,2 0 0,1 4,8H20A2,2 0 0,1 22,10V14M4,14H8V10H4V14M10,14H14V10H10V14M16,14H20V10H16V14Z"}
        ) 
      ]
    )
  }
}