import { h } from 'vue'
export default {
  $_icon: {
    name: "RocketOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["rocket","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-rocket-outline"},
      [ 
        h(
          "path",
          {"d":"M12 2C12 2 7 4 7 12C7 15.1 7.76 17.75 8.67 19.83C9 20.55 9.71 21 10.5 21H13.5C14.29 21 15 20.55 15.33 19.83C16.25 17.75 17 15.1 17 12C17 4 12 2 12 2M13.5 19H10.5C9.5 16.76 9 14.41 9 12C9 7.36 10.9 5.2 12 4.33C13.1 5.2 15 7.36 15 12C15 14.41 14.5 16.76 13.5 19M20 22L16.14 20.45C16.84 18.92 17.34 17.34 17.65 15.73M7.86 20.45L4 22L6.35 15.73C6.66 17.34 7.16 18.92 7.86 20.45M12 12C10.9 12 10 11.1 10 10C10 8.9 10.9 8 12 8C13.1 8 14 8.9 14 10C14 11.1 13.1 12 12 12Z"}
        ) 
      ]
    )
  }
}