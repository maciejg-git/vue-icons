import { h } from 'vue'
export default {
  $_icon: {
    name: "RayEnd",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["ray","end"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M20,9C18.69,9 17.58,9.83 17.17,11H2V13H17.17C17.58,14.17 18.69,15 20,15A3,3 0 0,0 23,12A3,3 0 0,0 20,9Z"}
        ) 
      ]
    )
  }
}