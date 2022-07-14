import { h } from 'vue'
export default {
  $_icon: {
    name: "CardsPlayingSpade",
    vendor: "Mdi",
    type: "",
    tags: ["cards","playing","spade"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-cards-playing-spade"},
      [ 
        h(
          "path",
          {"d":"M17 2H7C5.9 2 5 2.9 5 4V20C5 21.1 5.9 22 7 22H17C18.1 22 19 21.1 19 20V4C19 2.9 18.1 2 17 2M13.8 15C13.4 15 13 14.9 12.6 14.7L13.5 17H10.5L11.4 14.7C11 14.9 10.6 15 10.2 15C9 15 8 14 8 12.8C8 11.3 9.4 10.1 11.4 8.2L12 7.7L12.6 8.2C14.6 10.1 16 11.3 16 12.8C16 14.1 15 15 13.8 15Z"}
        ) 
      ]
    )
  }
}