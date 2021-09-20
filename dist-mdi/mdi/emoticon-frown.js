import { h } from 'vue'
export default {
  name: "EmoticonFrown",
  vendor: "Mdi",
  render() {
    return h(
      "svg",
      { "xmlns": "http://www.w3.org/2000/svg","xmlns:xlink": "http://www.w3.org/1999/xlink","version": "1.1","id": "mdi-emoticon-frown","width": "24","height": "24","viewBox": "0 0 24 24","class": "mdi-icon","fill": "currentColor" },
      [ h("path", { "d": "M12 2C6.47 2 2 6.5 2 12S6.47 22 12 22C17.5 22 22 17.5 22 12S17.5 2 12 2M15.5 8C16.33 8 17 8.67 17 9.5S16.33 11 15.5 11 14 10.33 14 9.5 14.67 8 15.5 8M8.5 8C9.33 8 10 8.67 10 9.5S9.33 11 8.5 11 7 10.33 7 9.5 7.67 8 8.5 8M6.89 17C7.69 14.96 9.67 13.5 12 13.5S16.31 14.96 17.11 17H6.89Z" }) ]
    )
  }
}