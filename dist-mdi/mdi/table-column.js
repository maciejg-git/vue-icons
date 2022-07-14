import { h } from 'vue'
export default {
  $_icon: {
    name: "TableColumn",
    vendor: "Mdi",
    type: "",
    tags: ["table","column"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-table-column"},
      [ 
        h(
          "path",
          {"d":"M8,2H16A2,2 0 0,1 18,4V20A2,2 0 0,1 16,22H8A2,2 0 0,1 6,20V4A2,2 0 0,1 8,2M8,10V14H16V10H8M8,16V20H16V16H8M8,4V8H16V4H8Z"}
        ) 
      ]
    )
  }
}