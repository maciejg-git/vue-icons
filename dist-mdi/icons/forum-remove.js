import { h } from 'vue'
export default {
  $_icon: {
    name: "ForumRemove",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["forum","remove"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-forum-remove"},
      [ 
        h(
          "path",
          {"d":"M21 6H19V12.1C20.2 12.3 21.2 12.8 22 13.5V7C22 6.5 21.5 6 21 6M6 17C6 17.5 6.5 18 7 18H12C12 16.9 12.3 15.9 12.8 15H6V17M16 2H3C2.5 2 2 2.5 2 3V17L6 13H14.7C15.4 12.5 16.2 12.2 17 12.1V3C17 2.5 16.5 2 16 2M20.12 14.46L21.54 15.88L19.41 18L21.54 20.12L20.12 21.54L18 19.41L15.88 21.54L14.47 20.12L16.59 18L14.47 15.88L15.88 14.47L18 16.59L20.12 14.46Z"}
        ) 
      ]
    )
  }
}