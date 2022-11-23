import { h } from 'vue'
export default {
  $_icon: {
    name: "AlertMinus",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["alert","minus"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M14 19C14 16.21 15.91 13.87 18.5 13.2L12 2L1 21H14.35C14.13 20.37 14 19.7 14 19M13 18H11V16H13V18M13 14H11V10H13V14M24 18V20H16V18H24Z"}
        ) 
      ]
    )
  }
}