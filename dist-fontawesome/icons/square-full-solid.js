import { h } from 'vue'
export default {
  $_icon: {
    name: "SquareFull",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["solid"],
    tags: ["square","full"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512","fill":"currentColor","data-name":"fa-square-full"},
      [ 
        h(
          "path",
          {"d":"M0 0H512V512H0V0z"}
        ) 
      ]
    )
  }
}