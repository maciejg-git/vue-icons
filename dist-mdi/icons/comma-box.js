import { h } from 'vue'
export default {
  $_icon: {
    name: "CommaBox",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["comma","box"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-comma-box"},
      [ 
        h(
          "path",
          {"d":"M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M15,13V7H9V13H12L10,17H13L15,13Z"}
        ) 
      ]
    )
  }
}