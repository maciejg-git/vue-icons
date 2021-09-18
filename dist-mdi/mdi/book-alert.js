import { h } from 'vue'
export default {
  name: "BookAlert",
  vendor: "Mdi",
  render() {
    return h(
      "svg",
      { "xmlns": "http://www.w3.org/2000/svg","xmlns:xlink": "http://www.w3.org/1999/xlink","version": "1.1","id": "mdi-book-alert","width": "24","height": "24","viewBox": "0 0 24 24","class": "mdi-icon" },
      [ h("path", { "d": "M18 4V20C18 21.11 17.11 22 16 22H4C2.9 22 2 21.11 2 20V4C2 2.9 2.9 2 4 2H5V9L7.5 7.5L10 9V2H16C17.1 2 18 2.89 18 4M20 17H22V15H20V17M20 7V13H22V7H20Z" }) ]
    )
  }
}