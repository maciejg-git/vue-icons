import { h } from 'vue'
export default {
  $_icon: {
    name: "RayStart",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["ray","start"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M4,9C5.31,9 6.42,9.83 6.83,11H22V13H6.83C6.42,14.17 5.31,15 4,15A3,3 0 0,1 1,12A3,3 0 0,1 4,9Z"}
        ) 
      ]
    )
  }
}