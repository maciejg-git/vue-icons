import { h } from 'vue'
export default {
  $_icon: {
    name: "DragVerticalVariant",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["drag","vertical","variant"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M11 21H9V3H11V21M15 3H13V21H15V3Z"}
        ) 
      ]
    )
  }
}