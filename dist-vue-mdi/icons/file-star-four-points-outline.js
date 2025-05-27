import { h } from 'vue'
export default {
  $_icon: {
    name: "FileStarFourPointsOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["file","star","four","points","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M12 11L10.74 13.75L8 15L10.74 16.26L12 19L13.25 16.26L16 15L13.25 13.75L12 11M6 2H14L20 8V20C20 21.1 19.1 22 18 22H6C4.9 22 4 21.1 4 20V4C4 2.9 4.9 2 6 2M6 4V20H18V9H13V4H6Z"}
        ) 
      ]
    )
  }
}