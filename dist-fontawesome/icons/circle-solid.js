import { h } from 'vue'
export default {
  $_icon: {
    name: "Circle",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["solid"],
    tags: ["circle"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512","fill":"currentColor","data-name":"fa-circle"},
      [ 
        h(
          "path",
          {"d":"M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256z"}
        ) 
      ]
    )
  }
}