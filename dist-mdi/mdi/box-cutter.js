import { h } from 'vue'
export default {
  name: "BoxCutter",
  vendor: "Mdi",
  render() {
    return h(
      "svg",
      { "xmlns": "http://www.w3.org/2000/svg","xmlns:xlink": "http://www.w3.org/1999/xlink","version": "1.1","id": "mdi-box-cutter","width": "24","height": "24","viewBox": "0 0 24 24","class": "mdi-icon" },
      [ h("path", { "d": "M7.22,11.91C6.89,12.24 6.71,12.65 6.66,13.08L12.17,15.44L20.66,6.96C21.44,6.17 21.44,4.91 20.66,4.13L19.24,2.71C18.46,1.93 17.2,1.93 16.41,2.71L7.22,11.91M5,16V21.75L10.81,16.53L5.81,14.53L5,16M17.12,4.83C17.5,4.44 18.15,4.44 18.54,4.83C18.93,5.23 18.93,5.86 18.54,6.25C18.15,6.64 17.5,6.64 17.12,6.25C16.73,5.86 16.73,5.23 17.12,4.83Z" }) ]
    )
  }
}