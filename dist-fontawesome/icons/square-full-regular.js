import { h } from 'vue'
export default {
  $_icon: {
    name: "SquareFull",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["Regular"],
    tags: ["square","full"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M464 48l0 416L48 464 48 48l416 0zM48 0L0 0 0 48 0 464l0 48 48 0 416 0 48 0 0-48 0-416 0-48L464 0 48 0z"}
        ) 
      ]
    )
  }
}