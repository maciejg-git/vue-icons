import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowLeftBoldBox",
    vendor: "Mdi",
    type: [],
    tags: ["arrow","left","bold","box"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-arrow-left-bold-box"},
      [ 
        h(
          "path",
          {"d":"M21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5M7,12L12,17V14H16V10H12V7L7,12Z"}
        ) 
      ]
    )
  }
}