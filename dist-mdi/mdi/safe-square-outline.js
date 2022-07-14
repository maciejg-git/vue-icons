import { h } from 'vue'
export default {
  $_icon: {
    name: "SafeSquareOutline",
    vendor: "Mdi",
    type: "",
    tags: ["safe","square","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-safe-square-outline"},
      [ 
        h(
          "path",
          {"d":"M10 12C10 10.9 10.9 10 12 10C13.1 10 14 10.9 14 12C14 13.1 13.1 14 12 14C10.9 14 10 13.1 10 12M7.8 17.7L6.3 16.3L7.8 14.8C7.3 14 7 13 7 12C7 11 7.3 10 7.8 9.3L6.3 7.8L7.8 6.3L9.2 7.8C10 7.3 11 7 12 7C13 7 14 7.3 14.8 7.8L16.3 6.3L17.7 7.7L16.2 9.2C16.7 10 17 11 17 12C17 13 16.7 14 16.2 14.8L17.7 16.3L16.3 17.7L14.8 16.2C14 16.7 13 17 12 17C11 17 10 16.7 9.3 16.2L7.8 17.7M12 9C10.3 9 9 10.3 9 12C9 13.7 10.3 15 12 15C13.7 15 15 13.7 15 12C15 10.3 13.7 9 12 9M20 2C21.1 2 22 2.9 22 4V20C22 21.1 21.1 22 20 22H19V23H15V22H9V23H5V22H4C2.9 22 2 21.1 2 20V4C2 2.9 2.9 2 4 2H20M20 20V4H4V20H20Z"}
        ) 
      ]
    )
  }
}