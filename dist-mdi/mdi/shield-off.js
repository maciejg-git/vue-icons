import { h } from 'vue'
export default {
  name: "ShieldOff",
  vendor: "Mdi",
  render() {
    return h(
      "svg",
      { "xmlns": "http://www.w3.org/2000/svg","xmlns:xlink": "http://www.w3.org/1999/xlink","version": "1.1","id": "mdi-shield-off","width": "24","height": "24","viewBox": "0 0 24 24","class": "mdi-icon" },
      [ h("path", { "d": "M1,4.27L2.28,3L20.5,21.22L19.23,22.5L17,20.25C15.57,21.57 13.87,22.54 12,23C6.84,21.74 3,16.55 3,11V6.27L1,4.27M12,1L21,5V11C21,13.28 20.35,15.5 19.23,17.41L5.65,3.82L12,1Z" }) ]
    )
  }
}