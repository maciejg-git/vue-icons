import { h } from 'vue'
export default {
  $_icon: {
    name: "SetMerge",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["set","merge"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M2 7V9H7V7H2M12 9V11H9V13H12V15L15 12L12 9M17 9V15H22V9H17M2 11V13H7V11H2M2 15V17H7V15H2Z"}
        ) 
      ]
    )
  }
}