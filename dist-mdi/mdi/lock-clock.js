import { h } from 'vue'
export default {
  name: "LockClock",
  vendor: "Mdi",
  render() {
    return h(
      "svg",
      { "xmlns": "http://www.w3.org/2000/svg","xmlns:xlink": "http://www.w3.org/1999/xlink","version": "1.1","id": "mdi-lock-clock","width": "24","height": "24","viewBox": "0 0 24 24","class": "mdi-icon" },
      [ h("path", { "d": "M8.5,2C6,2 4,4 4,6.5V7C2.89,7 2,7.89 2,9V18C2,19.11 2.89,20 4,20H8.72C10.18,21.29 12.06,22 14,22A8,8 0 0,0 22,14A8,8 0 0,0 14,6C13.66,6 13.32,6.03 13,6.08C12.76,3.77 10.82,2 8.5,2M8.5,4A2.5,2.5 0 0,1 11,6.5V7H6V6.5A2.5,2.5 0 0,1 8.5,4M14,8A6,6 0 0,1 20,14A6,6 0 0,1 14,20A6,6 0 0,1 8,14A6,6 0 0,1 14,8M13,10V15L16.64,17.19L17.42,15.9L14.5,14.15V10H13Z" }) ]
    )
  }
}