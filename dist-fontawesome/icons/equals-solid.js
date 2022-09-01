import { h } from 'vue'
export default {
  $_icon: {
    name: "Equals",
    vendor: "Fa",
    type: ["solid"],
    tags: ["equals"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 448 512","fill":"currentColor","data-name":"fa-equals"},
      [ 
        h(
          "path",
          {"d":"M48 192h352c17.69 0 32-14.32 32-32s-14.31-31.1-32-31.1h-352c-17.69 0-32 14.31-32 31.1S30.31 192 48 192zM400 320h-352c-17.69 0-32 14.31-32 31.1s14.31 32 32 32h352c17.69 0 32-14.32 32-32S417.7 320 400 320z"}
        ) 
      ]
    )
  }
}