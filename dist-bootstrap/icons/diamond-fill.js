import { h } from 'vue'
export default {
  $_icon: {
    name: "DiamondFill",
    vendor: "B",
    type: [],
    tags: ["diamond","fill"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16","data-name":"b-diamond-fill"},
      [ 
        h(
          "path",
          {"fill-rule":"evenodd","d":"M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.482 1.482 0 0 1 0-2.098L6.95.435z"}
        ) 
      ]
    )
  }
}