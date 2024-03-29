import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowUpBoldCircle",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["arrow","up","bold","circle"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22M12,7L7,12H10V16H14V12H17L12,7Z"}
        ) 
      ]
    )
  }
}