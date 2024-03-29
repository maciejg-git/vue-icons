import { h } from 'vue'
export default {
  $_icon: {
    name: "BookmarkMultiple",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["bookmark","multiple"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M15,5A2,2 0 0,1 17,7V23L10,20L3,23V7C3,5.89 3.9,5 5,5H15M9,1H19A2,2 0 0,1 21,3V19L19,18.13V3H7A2,2 0 0,1 9,1Z"}
        ) 
      ]
    )
  }
}