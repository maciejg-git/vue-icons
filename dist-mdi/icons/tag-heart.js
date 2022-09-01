import { h } from 'vue'
export default {
  $_icon: {
    name: "TagHeart",
    vendor: "Mdi",
    type: [],
    tags: ["tag","heart"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-tag-heart"},
      [ 
        h(
          "path",
          {"d":"M21.41,11.58L12.41,2.58C12.05,2.22 11.55,2 11,2H4A2,2 0 0,0 2,4V11C2,11.55 2.22,12.05 2.59,12.42L11.59,21.42C11.95,21.78 12.45,22 13,22C13.55,22 14.05,21.78 14.41,21.41L21.41,14.41C21.78,14.05 22,13.55 22,13C22,12.45 21.77,11.94 21.41,11.58M5.5,7A1.5,1.5 0 0,1 4,5.5A1.5,1.5 0 0,1 5.5,4A1.5,1.5 0 0,1 7,5.5A1.5,1.5 0 0,1 5.5,7M17.27,15.27L13,19.54L8.73,15.27C8.28,14.81 8,14.19 8,13.5A2.5,2.5 0 0,1 10.5,11C11.19,11 11.82,11.28 12.27,11.74L13,12.46L13.73,11.73C14.18,11.28 14.81,11 15.5,11A2.5,2.5 0 0,1 18,13.5C18,14.19 17.72,14.82 17.27,15.27Z"}
        ) 
      ]
    )
  }
}