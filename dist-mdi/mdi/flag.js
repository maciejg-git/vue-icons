import { h } from 'vue'
export default {
  $_icon: {
    name: "Flag",
    vendor: "Mdi",
    type: "",
    tags: ["flag"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-flag"},
      [ 
        h(
          "path",
          {"d":"M14.4,6L14,4H5V21H7V14H12.6L13,16H20V6H14.4Z"}
        ) 
      ]
    )
  }
}