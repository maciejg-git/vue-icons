import { h } from 'vue'
export default {
  $_icon: {
    name: "ChevronTripleLeft",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["chevron","triple","left"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-chevron-triple-left"},
      [ 
        h(
          "path",
          {"d":"M9.42,7.41L4.83,12L9.42,16.59L8,18L2,12L8,6L9.42,7.41M15.42,7.41L10.83,12L15.42,16.59L14,18L8,12L14,6L15.42,7.41M21.42,7.41L16.83,12L21.42,16.59L20,18L14,12L20,6L21.42,7.41Z"}
        ) 
      ]
    )
  }
}