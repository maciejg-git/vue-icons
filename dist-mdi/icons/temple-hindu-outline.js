import { h } from 'vue'
export default {
  $_icon: {
    name: "TempleHinduOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["temple","hindu","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M20 11V13H18L15 3V1H13V3H11V1H9V3.1L6 13H4V11H2V22H11V17H13V22H22V11H20M15.3 11H8.7L9.3 9H14.7L15.3 11M14.1 7H9.9L10.5 5H13.5L14.1 7M20 20H15V15H9V20H4V15H7.5L8.1 13H15.9L16.5 15H20V20Z"}
        ) 
      ]
    )
  }
}