import { h } from 'vue'
export default {
  $_icon: {
    name: "BeakerAlert",
    vendor: "Mdi",
    type: [],
    tags: ["beaker","alert"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-beaker-alert"},
      [ 
        h(
          "path",
          {"d":"M3 3H21V5C19.9 5 19 5.9 19 7V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V7C5 5.9 4.1 5 3 5V3M7 9V10H10V9H7M7 11V12H10V11H7M10 16V15H7V16H10M12 14V13H7V14H12M12 8V7H7V8H12M21 13V7H23V13H21M21 17V15H23V17H21Z"}
        ) 
      ]
    )
  }
}