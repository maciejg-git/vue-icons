import { h } from 'vue'
export default {
  name: "SignCaution",
  vendor: "Mdi",
  render() {
    return h(
      "svg",
      { "xmlns": "http://www.w3.org/2000/svg","xmlns:xlink": "http://www.w3.org/1999/xlink","version": "1.1","id": "mdi-sign-caution","width": "24","height": "24","viewBox": "0 0 24 24","class": "mdi-icon" },
      [ h("path", { "d": "M2,3H22V13H18V21H16V13H8V21H6V13H2V3M18.97,11L20,9.97V7.15L16.15,11H18.97M13.32,11L19.32,5H16.5L10.5,11H13.32M7.66,11L13.66,5H10.83L4.83,11H7.66M5.18,5L4,6.18V9L8,5H5.18Z" }) ]
    )
  }
}