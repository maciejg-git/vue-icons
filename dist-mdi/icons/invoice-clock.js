import { h } from 'vue'
export default {
  $_icon: {
    name: "InvoiceClock",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["invoice","clock"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M15 13V16.69L18.19 18.53L18.94 17.23L16.5 15.82V13H15M9 22L10.87 20.76C12.14 22.14 13.97 23 16 23C19.87 23 23 19.87 23 16C23 14.09 22.24 12.36 21 11.1V3H3V22L6 20L9 22M16 21C13.24 21 11 18.76 11 16C11 13.24 13.24 11 16 11C18.76 11 21 13.24 21 16C21 18.76 18.76 21 16 21Z"}
        ) 
      ]
    )
  }
}