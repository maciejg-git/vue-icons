import { h } from 'vue'
export default {
  $_icon: {
    name: "Unicycle",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["unicycle"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M13 9.09V5H14C14.55 5 15 4.55 15 4S14.55 3 14 3H10C9.45 3 9 3.45 9 4S9.45 5 10 5H11V9.09C8.16 9.57 6 12.03 6 15C6 18.31 8.69 21 12 21S18 18.31 18 15C18 12.03 15.84 9.57 13 9.09M12 19C9.79 19 8 17.21 8 15C8 13.14 9.28 11.59 11 11.14V16H13V11.14C14.72 11.59 16 13.14 16 15C16 17.21 14.21 19 12 19Z"}
        ) 
      ]
    )
  }
}