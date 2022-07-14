import { h } from 'vue'
export default {
  $_icon: {
    name: "MouseMoveDown",
    vendor: "Mdi",
    type: "",
    tags: ["mouse","move","down"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-mouse-move-down"},
      [ 
        h(
          "path",
          {"d":"M7 9H2C2 6.04 4.17 3.57 7 3.09V9M20 7H18V13H15L19 17L23 13H20V7M9 3.09V9H14C14 6.04 11.83 3.57 9 3.09M2 15C2 18.3 4.7 21 8 21S14 18.3 14 15V11H2V15Z"}
        ) 
      ]
    )
  }
}