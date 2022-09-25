import { h } from 'vue'
export default {
  $_icon: {
    name: "Layers",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["layers"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-layers"},
      [ 
        h(
          "path",
          {"d":"M12,16L19.36,10.27L21,9L12,2L3,9L4.63,10.27M12,18.54L4.62,12.81L3,14.07L12,21.07L21,14.07L19.37,12.8L12,18.54Z"}
        ) 
      ]
    )
  }
}