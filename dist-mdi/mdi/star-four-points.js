import { h } from 'vue'
export default {
  name: "StarFourPoints",
  vendor: "Mdi",
  render() {
    return h(
      "svg",
      { "xmlns": "http://www.w3.org/2000/svg","xmlns:xlink": "http://www.w3.org/1999/xlink","version": "1.1","id": "mdi-star-four-points","width": "24","height": "24","viewBox": "0 0 24 24","class": "mdi-icon" },
      [ h("path", { "d": "M12,1L9,9L1,12L9,15L12,23L15,15L23,12L15,9L12,1Z" }) ]
    )
  }
}