import { h } from 'vue'
export default {
  $_icon: {
    name: "TagPlusOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["tag","plus","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M6.5 5A1.5 1.5 0 1 0 8 6.5A1.5 1.5 0 0 0 6.5 5M6.5 5A1.5 1.5 0 1 0 8 6.5A1.5 1.5 0 0 0 6.5 5M21.41 11.58L12.41 2.58A2 2 0 0 0 11 2H4A2 2 0 0 0 2 4V11A2 2 0 0 0 2.59 12.42L3 12.82A5.62 5.62 0 0 1 5.08 12.08L4 11V4H11L20 13L13 20L11.92 18.92A5.57 5.57 0 0 1 11.18 21L11.59 21.41A2 2 0 0 0 13 22A2 2 0 0 0 14.41 21.41L21.41 14.41A2 2 0 0 0 22 13A2 2 0 0 0 21.41 11.58M6.5 5A1.5 1.5 0 1 0 8 6.5A1.5 1.5 0 0 0 6.5 5M10 19H7V22H5V19H2V17H5V14H7V17H10Z"}
        ) 
      ]
    )
  }
}