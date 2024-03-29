import { h } from 'vue'
export default {
  $_icon: {
    name: "GlassPintOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["glass","pint","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M4 2L6 22H17L19 2H4M6.2 4H16.8L15.2 20H7.8L6.2 4Z"}
        ) 
      ]
    )
  }
}