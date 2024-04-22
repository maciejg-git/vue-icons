import { h } from 'vue'
export default {
  $_icon: {
    name: "AccountFileText",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["account","file","text"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M7.5 5C9.43 5 11 6.57 11 8.5C11 10.43 9.43 12 7.5 12C5.57 12 4 10.43 4 8.5C4 6.57 5.57 5 7.5 5M1 19V16.5C1 14.57 4.46 13 7.5 13C8.68 13 9.92 13.24 11 13.64V19H1M22 19H14C13.45 19 13 18.55 13 18V6C13 5.45 13.45 5 14 5H19L23 9V18C23 18.55 22.55 19 22 19M18 10H21V9.83L18.17 7H18V10M15 12V13.5H21V12H15M15 15V16.5H21V15H15Z"}
        ) 
      ]
    )
  }
}