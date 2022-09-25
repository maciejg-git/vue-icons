import { h } from 'vue'
export default {
  $_icon: {
    name: "SetSplit",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["set","split"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-set-split"},
      [ 
        h(
          "path",
          {"d":"M17 7V9H22V7H17M2 9V15H7V9H2M12 9V11H9V13H12V15L15 12L12 9M17 11V13H22V11H17M17 15V17H22V15H17Z"}
        ) 
      ]
    )
  }
}