import { h } from 'vue'
export default {
  $_icon: {
    name: "Car2Plus",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["car","2","plus"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-car-2-plus"},
      [ 
        h(
          "path",
          {"d":"M8 16C8 13.6 9.1 11.5 10.7 10H3L4.5 5.5H15.5L16.3 8C16.9 8 17.5 8.1 18 8.3L16.9 5C16.7 4.4 16.1 4 15.5 4H4.5C3.8 4 3.3 4.4 3.1 5L1 11V19C1 19.5 1.5 20 2 20H3C3.5 20 4 19.5 4 19V18H8.3C8.1 17.4 8 16.7 8 16M4.5 15C3.7 15 3 14.3 3 13.5S3.7 12 4.5 12 6 12.7 6 13.5 5.3 15 4.5 15M16 20V18H13V17H14C15.1 17 16 16.1 16 15V14C16 12.9 15.1 12 14 12H11V14H14V15H13C11.9 15 11 15.9 11 17V20M23 17H21V19H19V17H17V15H19V13H21V15H23V17Z"}
        ) 
      ]
    )
  }
}