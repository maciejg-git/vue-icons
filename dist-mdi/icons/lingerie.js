import { h } from 'vue'
export default {
  $_icon: {
    name: "Lingerie",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["lingerie"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-lingerie"},
      [ 
        h(
          "path",
          {"d":"M22 7H20V2H18V4.34L12 6.91L6 4.34V2H4V7H2V9H4.05C4.3 11.25 6.19 13 8.5 13C9.92 13 11.18 12.33 12 11.3C12.83 12.33 14.08 13 15.5 13C17.81 13 19.7 11.25 19.95 9H22V7M8.5 11C7.12 11 6 9.88 6 8.5V6.5L11 8.65C10.9 9.96 9.83 11 8.5 11M18 8.5C18 9.88 16.88 11 15.5 11C14.17 11 13.1 9.96 13 8.65L18 6.5V8.5M2 15V17H3C5.97 17 8.43 19.17 8.91 22H15.09C15.57 19.17 18.03 17 21 17H22V15H2M13.59 20H10.41C9.94 18.84 9.21 17.82 8.29 17H15.71C14.79 17.82 14.06 18.84 13.59 20Z"}
        ) 
      ]
    )
  }
}