import { h } from 'vue'
export default {
  $_icon: {
    name: "SquareFull",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["regular"],
    tags: ["square","full"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M512 0V512H0V0H512zM464 48H48V464H464V48z"}
        ) 
      ]
    )
  }
}