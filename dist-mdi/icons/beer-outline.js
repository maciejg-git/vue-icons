import { h } from 'vue'
export default {
  $_icon: {
    name: "BeerOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["beer","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-beer-outline"},
      [ 
        h(
          "path",
          {"d":"M4 2L6 22H17L19 2H4M6.2 4H16.8L16.5 7.23C13.18 8.5 11.85 7.67 11.38 7.31C11.13 7.12 10.77 6.69 10.11 6.39C9.45 6.08 8.55 6 7.5 6.32C7.09 6.43 6.77 6.61 6.5 6.79L6.2 4M8.86 8.11C9.05 8.11 9.16 8.15 9.27 8.2C9.5 8.3 9.71 8.55 10.17 8.9C11.03 9.56 13.03 10.36 16.26 9.41L15.2 20H7.8L6.71 9.06C6.76 9 6.91 8.89 7.17 8.71C7.5 8.5 7.91 8.28 8 8.25L8 8.25H8.03C8.41 8.14 8.67 8.1 8.86 8.11Z"}
        ) 
      ]
    )
  }
}