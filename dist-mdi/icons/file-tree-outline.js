import { h } from 'vue'
export default {
  $_icon: {
    name: "FileTreeOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["file","tree","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M12 13H7V18H12V20H5V10H7V11H12V13M8 4V6H4V4H8M10 2H2V8H10V2M20 11V13H16V11H20M22 9H14V15H22V9M20 18V20H16V18H20M22 16H14V22H22V16Z"}
        ) 
      ]
    )
  }
}