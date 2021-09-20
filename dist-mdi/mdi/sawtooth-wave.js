import { h } from 'vue'
export default {
  name: "SawtoothWave",
  vendor: "Mdi",
  render() {
    return h(
      "svg",
      { "xmlns": "http://www.w3.org/2000/svg","xmlns:xlink": "http://www.w3.org/1999/xlink","version": "1.1","id": "mdi-sawtooth-wave","width": "24","height": "24","viewBox": "0 0 24 24","class": "mdi-icon","fill": "currentColor" },
      [ h("path", { "d": "M11 22V6.83L2 16V13.17L13 2V17.17L22 8V10.83L11 22Z" }) ]
    )
  }
}