import { h } from 'vue'
export default {
  name: "HockeySticks",
  vendor: "Mdi",
  render() {
    return h(
      "svg",
      { "xmlns": "http://www.w3.org/2000/svg","xmlns:xlink": "http://www.w3.org/1999/xlink","version": "1.1","id": "mdi-hockey-sticks","width": "24","height": "24","viewBox": "0 0 24 24","class": "mdi-icon" },
      [ h("path", { "d": "M7.58,3L5.05,4.61L9.04,10.87L10.82,8.08L7.58,3M16.43,3L7.5,17H2V21H8.5L18.96,4.61L16.43,3M14.97,14.59L13.19,17.38L15.5,21H22V17H16.5L14.97,14.59Z" }) ]
    )
  }
}