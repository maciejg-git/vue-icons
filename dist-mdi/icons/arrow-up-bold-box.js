import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowUpBoldBox",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["arrow","up","bold","box"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21M12,7L7,12H10V16H14V12H17L12,7Z"}
        ) 
      ]
    )
  }
}