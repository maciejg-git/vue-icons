import { h } from 'vue'
export default {
  $_icon: {
    name: "LedVariantOn",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["led","variant","on"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M12,3A4,4 0 0,0 8,7V13H6V15H9V21H11V15H13V21H15V15H18V13H16V7A4,4 0 0,0 12,3Z"}
        ) 
      ]
    )
  }
}