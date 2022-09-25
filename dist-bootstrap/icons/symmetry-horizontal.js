import { h } from 'vue'
export default {
  $_icon: {
    name: "SymmetryHorizontal",
    vendor: "B",
    license: "MIT",
    type: [],
    tags: ["symmetry","horizontal"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16","data-name":"b-symmetry-horizontal"},
      [ 
        h(
          "path",
          {"d":"M13.5 7a.5.5 0 0 0 .24-.939l-11-6A.5.5 0 0 0 2 .5v6a.5.5 0 0 0 .5.5h11zm.485 2.376a.5.5 0 0 1-.246.563l-11 6A.5.5 0 0 1 2 15.5v-6a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .485.376zM11.539 10H3v4.658L11.54 10z"}
        ) 
      ]
    )
  }
}