import { h } from 'vue'
export default {
  $_icon: {
    name: "BowlOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["bowl","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M2 12V15C2 18.9 5.1 22 9 22H15C18.9 22 22 18.9 22 15V12H2M4 14H20V15C20 17.8 17.8 20 15 20H9C6.2 20 4 17.8 4 15V14Z"}
        ) 
      ]
    )
  }
}