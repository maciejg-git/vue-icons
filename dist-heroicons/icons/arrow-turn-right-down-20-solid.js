import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowTurnRightDown",
    vendor: "H",
    license: "MIT",
    type: ["20","Solid"],
    tags: ["arrow","turn","right","down"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true","data-slot":"icon"},
      [ 
        h(
          "path",
          {"fill-rule":"evenodd","d":"M3 3.75c0 .414.336.75.75.75h7.5v10.94l-1.97-1.97a.75.75 0 0 0-1.06 1.06l3.25 3.25a.75.75 0 0 0 1.06 0l3.25-3.25a.75.75 0 1 0-1.06-1.06l-1.97 1.97V3.75A.75.75 0 0 0 12 3H3.75a.75.75 0 0 0-.75.75Z","clip-rule":"evenodd"}
        ) 
      ]
    )
  }
}