import { h } from 'vue'
export default {
  $_icon: {
    name: "ClipboardTextPlay",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["clipboard","text","play"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M19,3A2,2 0 0,1 21,5V13.34C20.36,13.11 19.68,13 19,13C15.68,13 13,15.69 13,19C13,19.68 13.11,20.36 13.34,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H9.18C9.5,2.16 10.14,1.5 11,1.2C12.53,0.64 14.25,1.44 14.82,3H19M12,3A1,1 0 0,0 11,4A1,1 0 0,0 12,5A1,1 0 0,0 13,4A1,1 0 0,0 12,3M11,17V15H7V17H11M13,13V11H7V13H13M17,9V7H7V9H17M17,16L22,19L17,22V16Z"}
        ) 
      ]
    )
  }
}