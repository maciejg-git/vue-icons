import { h } from 'vue'
export default {
  $_icon: {
    name: "PuzzleCheckOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["puzzle","check","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-puzzle-check-outline"},
      [ 
        h(
          "path",
          {"d":"M23.5 17L18.5 22L15 18.5L16.5 17L18.5 19L22 15.5L23.5 17M22 13.5L22 13.8C21.37 13.44 20.67 13.19 19.94 13.07C19.75 12.45 19.18 12 18.5 12H17V7H12V5.5C12 4.67 11.33 4 10.5 4C9.67 4 9 4.67 9 5.5V7H4L4 9.12C5.76 9.8 7 11.5 7 13.5C7 15.5 5.75 17.2 4 17.88V20H6.12C6.8 18.25 8.5 17 10.5 17C11.47 17 12.37 17.3 13.12 17.8L13 19C13 20.09 13.29 21.12 13.8 22H13.2V21.7C13.2 20.21 12 19 10.5 19C9 19 7.8 20.21 7.8 21.7V22H4C2.9 22 2 21.1 2 20V16.2H2.3C3.79 16.2 5 15 5 13.5C5 12 3.79 10.8 2.3 10.8H2V7C2 5.9 2.9 5 4 5H7.04C7.28 3.3 8.74 2 10.5 2C12.26 2 13.72 3.3 13.96 5H17C18.1 5 19 5.9 19 7V10.04C20.7 10.28 22 11.74 22 13.5Z"}
        ) 
      ]
    )
  }
}