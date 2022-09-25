import { h } from 'vue'
export default {
  $_icon: {
    name: "CircleBox",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["circle","box"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-circle-box"},
      [ 
        h(
          "path",
          {"d":"M19 3H5C3.9 3 3 3.9 3 5V19C3 20.11 3.9 21 5 21H19C20.11 21 21 20.11 21 19V5C21 3.9 20.11 3 19 3M12 16C9.79 16 8 14.21 8 12S9.79 8 12 8 16 9.79 16 12 14.21 16 12 16Z"}
        ) 
      ]
    )
  }
}