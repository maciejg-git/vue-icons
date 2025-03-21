import { h } from 'vue'
export default {
  $_icon: {
    name: "CurtainsClosed",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["curtains","closed"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M23 3H1V1H23V3M2 22H11V4H2V22M22 4H13V22H22V4Z"}
        ) 
      ]
    )
  }
}