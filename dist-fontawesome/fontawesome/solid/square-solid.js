import { h } from 'vue'
export default {
  $_icon: {
    name: "Square",
    vendor: "Fa",
    type: "Solid",
    tags: ["square"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 448 512","fill":"currentColor","data-name":"fa-square"},
      [ 
        h(
          "path",
          {"d":"M0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96z"}
        ) 
      ]
    )
  }
}