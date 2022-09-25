import { h } from 'vue'
export default {
  $_icon: {
    name: "CommentSearch",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["comment","search"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-comment-search"},
      [ 
        h(
          "path",
          {"d":"M15.5,2C18,2 20,4 20,6.5C20,7.38 19.75,8.2 19.31,8.89L22.41,12L21,13.39L17.89,10.31C17.2,10.75 16.38,11 15.5,11C13,11 11,9 11,6.5C11,4 13,2 15.5,2M15.5,4A2.5,2.5 0 0,0 13,6.5A2.5,2.5 0 0,0 15.5,9A2.5,2.5 0 0,0 18,6.5A2.5,2.5 0 0,0 15.5,4M4,4H9.5C9.19,4.79 9,5.64 9,6.5A6.5,6.5 0 0,0 15.5,13C16.18,13 16.83,12.89 17.46,12.69L20,15.23V16A2,2 0 0,1 18,18H13.9L10.2,21.71C10,21.89 9.76,22 9.5,22H9A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V6A2,2 0 0,1 4,4Z"}
        ) 
      ]
    )
  }
}