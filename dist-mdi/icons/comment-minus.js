import { h } from 'vue'
export default {
  $_icon: {
    name: "CommentMinus",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["comment","minus"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-comment-minus"},
      [ 
        h(
          "path",
          {"d":"M20 2H4C2.9 2 2 2.89 2 4V16C2 17.11 2.9 18 4 18H8V21C8 21.55 8.45 22 9 22H9.5C9.75 22 10 21.9 10.2 21.71L13.9 18H20C21.11 18 22 17.11 22 16V4C22 2.9 21.11 2 20 2M16 11H8V9H16V11Z"}
        ) 
      ]
    )
  }
}