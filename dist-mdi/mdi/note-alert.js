import { h } from 'vue'
export default {
  name: "NoteAlert",
  vendor: "Mdi",
  render() {
    return h(
      "svg",
      { "xmlns": "http://www.w3.org/2000/svg","xmlns:xlink": "http://www.w3.org/1999/xlink","version": "1.1","id": "mdi-note-alert","width": "24","height": "24","viewBox": "0 0 24 24","class": "mdi-icon","fill": "currentColor" },
      [ h("path", { "d": "M3 3C1.89 3 1 3.89 1 5V19C1 20.11 1.9 21 3 21H17C18.11 21 19 20.11 19 19V9L13 3H3M12 10V4.5L17.5 10H12M23 7V13H21V7H23M21 15H23V17H21V15Z" }) ]
    )
  }
}