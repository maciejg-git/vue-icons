import { h } from 'vue'
export default {
  $_icon: {
    name: "HomeVariant",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["home","variant"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M12,3L20,9V21H15V14H9V21H4V9L12,3Z"}
        ) 
      ]
    )
  }
}