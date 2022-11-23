import { h } from 'vue'
export default {
  $_icon: {
    name: "ChatSleep",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["chat","sleep"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M12 3C6.5 3 2 6.58 2 11C2 13.13 3.05 15.07 4.75 16.5C4.7 17.1 4.33 18.67 2 21C2 21 5.55 21 8.47 18.5C9.57 18.82 10.76 19 12 19C17.5 19 22 15.42 22 11S17.5 3 12 3M15 9.3L11.76 13H15V15H9V12.7L12.24 9H9V7H15V9.3Z"}
        ) 
      ]
    )
  }
}