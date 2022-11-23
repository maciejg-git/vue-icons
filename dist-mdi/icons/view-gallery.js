import { h } from 'vue'
export default {
  $_icon: {
    name: "ViewGallery",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["view","gallery"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M21 3H2V16H21V3M2 17H6V21H2V17M7 17H11V21H7V17M12 17H16V21H12V17M17 17H21V21H17V17Z"}
        ) 
      ]
    )
  }
}