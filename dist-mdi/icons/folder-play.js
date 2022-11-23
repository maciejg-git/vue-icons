import { h } from 'vue'
export default {
  $_icon: {
    name: "FolderPlay",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["folder","play"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M22 8V13.81C21.12 13.3 20.1 13 19 13C15.69 13 13 15.69 13 19C13 19.34 13.04 19.67 13.09 20H4C2.9 20 2 19.11 2 18V6C2 4.89 2.89 4 4 4H10L12 6H20C21.1 6 22 6.89 22 8M17 22L22 19L17 16V22Z"}
        ) 
      ]
    )
  }
}