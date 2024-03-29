import { h } from 'vue'
export default {
  $_icon: {
    name: "StarFourPointsOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["star","four","points","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M12,6.7L13.45,10.55L17.3,12L13.45,13.45L12,17.3L10.55,13.45L6.7,12L10.55,10.55L12,6.7M12,1L9,9L1,12L9,15L12,23L15,15L23,12L15,9L12,1Z"}
        ) 
      ]
    )
  }
}