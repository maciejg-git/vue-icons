import { h } from 'vue'
export default {
  $_icon: {
    name: "NoteMinusOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["note","minus","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M23 18V20H15V18H23M13 19C13 19.7 13.13 20.37 13.35 21H5C3.89 21 3 20.1 3 19V5C3 3.89 3.89 3 5 3H15L21 9V13.35C20.37 13.13 19.7 13 19 13V12H12V5H5V19H13M14 10H19.5L14 4.5V10Z"}
        ) 
      ]
    )
  }
}