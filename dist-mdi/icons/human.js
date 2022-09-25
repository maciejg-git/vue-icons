import { h } from 'vue'
export default {
  $_icon: {
    name: "Human",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["human"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-human"},
      [ 
        h(
          "path",
          {"d":"M21,9H15V22H13V16H11V22H9V9H3V7H21M12,2A2,2 0 0,1 14,4A2,2 0 0,1 12,6C10.89,6 10,5.1 10,4C10,2.89 10.89,2 12,2Z"}
        ) 
      ]
    )
  }
}