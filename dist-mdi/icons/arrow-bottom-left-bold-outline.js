import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowBottomLeftBoldOutline",
    vendor: "Mdi",
    type: [],
    tags: ["arrow","bottom","left","bold","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-arrow-bottom-left-bold-outline"},
      [ 
        h(
          "path",
          {"d":"M18.36,19.78H4.22V5.64L8.47,9.88L14.12,4.22L19.78,9.88L14.12,15.54L18.36,19.78M6.34,17.66H13.41L11.29,15.54L16.95,9.88L14.12,7.05L8.46,12.71L6.34,10.59V17.66Z"}
        ) 
      ]
    )
  }
}