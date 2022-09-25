import { h } from 'vue'
export default {
  $_icon: {
    name: "TableOff",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["table","off"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-table-off"},
      [ 
        h(
          "path",
          {"d":"M22.11 21.46L2.39 1.73L1.11 3L3.22 5.11C3.08 5.38 3 5.68 3 6V18C3 19.11 3.9 20 5 20H18.11L20.84 22.73L22.11 21.46M10.11 12H5V8H6.11L10.11 12M11 18H5V14H11V18M13 18V14.89L16.11 18H13M13 9.8L7.2 4H19C20.11 4 21 4.89 21 6V17.8L19 15.8V14H17.2L15.2 12H19V8H13V9.8Z"}
        ) 
      ]
    )
  }
}