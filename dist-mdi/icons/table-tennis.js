import { h } from 'vue'
export default {
  $_icon: {
    name: "TableTennis",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["table","tennis"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-table-tennis"},
      [ 
        h(
          "path",
          {"d":"M18.5,14C19.9,14 21,15.1 21,16.5C21,17.9 19.9,19 18.5,19C17.1,19 16,17.9 16,16.5C16,15.1 17.1,14 18.5,14M7,15C7,15 8,16 8,17V20.5C8,21.3 8.7,22 9.5,22C10.3,22 11,21.3 11,20.5V17C11,16 12,15 12,15H7M8,14H11C11,14 16,14 16,9C16,4 12,2 9.5,2C7,2 3,4 3,9C3,14 8,14 8,14Z"}
        ) 
      ]
    )
  }
}