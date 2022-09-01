import { h } from 'vue'
export default {
  $_icon: {
    name: "Tablet",
    vendor: "Fa",
    type: ["solid"],
    tags: ["tablet"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 448 512","fill":"currentColor","data-name":"fa-tablet"},
      [ 
        h(
          "path",
          {"d":"M384 0H64C28.65 0 0 28.65 0 64v384c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V64C448 28.65 419.3 0 384 0zM288 447.1C288 456.8 280.8 464 272 464H175.1C167.2 464 160 456.8 160 448S167.2 432 175.1 432h96C280.8 432 288 439.2 288 447.1z"}
        ) 
      ]
    )
  }
}