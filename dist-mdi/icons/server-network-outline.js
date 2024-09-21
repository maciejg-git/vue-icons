import { h } from 'vue'
export default {
  $_icon: {
    name: "ServerNetworkOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["server","network","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M13 13V15H14C14.6 15 15 15.4 15 16H22V18H15C15 18.6 14.6 19 14 19H10C9.4 19 9 18.6 9 18H2V16H9C9 15.4 9.4 15 10 15H11V13H3.2C2.5 13 2 12.3 2 11.4V6.6C2 5.7 2.5 5 3.2 5H20.8C21.5 5 22 5.7 22 6.6V11.4C22 12.3 21.5 13 20.8 13H13M9 10V8H10V10H9M5 8H7V10H5V8M20 7H4V11H20V7Z"}
        ) 
      ]
    )
  }
}