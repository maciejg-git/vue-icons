import { h } from 'vue'
export default {
  $_icon: {
    name: "TextBoxEdit",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["text","box","edit"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M10 19.11L12.11 17H7V15H14V15.12L16.12 13H7V11H17V12.12L18.24 10.89C18.72 10.41 19.35 10.14 20.04 10.14C20.37 10.14 20.7 10.21 21 10.33V5C21 3.89 20.1 3 19 3H5C3.89 3 3 3.89 3 5V19C3 20.11 3.9 21 5 21H10V19.11M7 7H17V9H7V7M21.7 14.35L20.7 15.35L18.65 13.3L19.65 12.3C19.86 12.09 20.21 12.09 20.42 12.3L21.7 13.58C21.91 13.79 21.91 14.14 21.7 14.35M12 19.94L18.06 13.88L20.11 15.93L14.06 22H12V19.94Z"}
        ) 
      ]
    )
  }
}