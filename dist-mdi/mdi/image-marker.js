import { h } from 'vue'
export default {
  name: "ImageMarker",
  vendor: "Mdi",
  render() {
    return h(
      "svg",
      { "xmlns": "http://www.w3.org/2000/svg","xmlns:xlink": "http://www.w3.org/1999/xlink","version": "1.1","id": "mdi-image-marker","width": "24","height": "24","viewBox": "0 0 24 24","class": "mdi-icon" },
      [ h("path", { "d": "M13.55 18C13.97 19.08 14.59 20.12 15.19 21H5C3.9 21 3 20.11 3 19V5C3 3.9 3.9 3 5 3H19C20.1 3 21 3.89 21 5V10.63C20.25 10.23 19.39 10 18.5 10C16.29 10 14.33 11.39 13.47 13.33L11 16.5L8.5 13.5L5 18H13.55M22 15.5C22 18.1 18.5 22 18.5 22S15 18.1 15 15.5C15 13.6 16.6 12 18.5 12S22 13.6 22 15.5M19.7 15.6C19.7 15 19.1 14.4 18.5 14.4S17.3 14.9 17.3 15.6C17.3 16.2 17.8 16.8 18.5 16.8S19.8 16.2 19.7 15.6Z" }) ]
    )
  }
}