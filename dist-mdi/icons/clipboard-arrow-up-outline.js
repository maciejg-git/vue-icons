import { h } from 'vue'
export default {
  $_icon: {
    name: "ClipboardArrowUpOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["clipboard","arrow","up","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M12,8L17,13H14V17H10V13H7L12,8M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H9.18C9.6,1.84 10.7,1 12,1C13.3,1 14.4,1.84 14.82,3H19M12,3A1,1 0 0,0 11,4A1,1 0 0,0 12,5A1,1 0 0,0 13,4A1,1 0 0,0 12,3M7,7V5H5V19H19V5H17V7H7Z"}
        ) 
      ]
    )
  }
}