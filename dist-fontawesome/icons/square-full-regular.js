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
          {"d":"M464 48V464H48V48H464zM48 0H0V48 464v48H48 464h48V464 48 0H464 48z"}
        ) 
      ]
    )
  }
}