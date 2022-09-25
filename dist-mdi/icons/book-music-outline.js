import { h } from 'vue'
export default {
  $_icon: {
    name: "BookMusicOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["book","music","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-book-music-outline"},
      [ 
        h(
          "path",
          {"d":"M13 20.5C13 21.03 13.09 21.53 13.26 22H6C4.89 22 4 21.11 4 20V4C4 2.9 4.89 2 6 2H18C19.11 2 20 2.9 20 4V11H18V4H13V12L10.5 9.75L8 12V4H6V20H13.04C13.03 20.17 13 20.33 13 20.5M20 13H18.5V18.21C18.19 18.07 17.86 18 17.5 18C16.12 18 15 19.12 15 20.5S16.12 23 17.5 23 20 21.88 20 20.5V15H22V13H20Z"}
        ) 
      ]
    )
  }
}