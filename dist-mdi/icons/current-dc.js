import { h } from 'vue'
export default {
  $_icon: {
    name: "CurrentDc",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["current","dc"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M2,9V11H22V9H2M2,13V15H7V13H2M9,13V15H15V13H9M17,13V15H22V13H17Z"}
        ) 
      ]
    )
  }
}