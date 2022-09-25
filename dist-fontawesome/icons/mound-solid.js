import { h } from 'vue'
export default {
  $_icon: {
    name: "Mound",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["solid"],
    tags: ["mound"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 576 512","fill":"currentColor","data-name":"fa-mound"},
      [ 
        h(
          "path",
          {"d":"M144.1 179.2C173.8 127.7 228.6 96 288 96C347.4 96 402.2 127.7 431.9 179.2L540.4 368C552.7 389.4 537.3 416 512.7 416H63.31C38.7 416 23.31 389.4 35.57 368L144.1 179.2z"}
        ) 
      ]
    )
  }
}