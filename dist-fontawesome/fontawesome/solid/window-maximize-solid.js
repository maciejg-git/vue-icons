import { h } from 'vue'
export default {
  $_icon: {
    name: "WindowMaximize",
    vendor: "Fa",
    type: "Solid",
    tags: ["window","maximize"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512","fill":"currentColor","data-name":"fa-window-maximize"},
      [ 
        h(
          "path",
          {"d":"M448 32C483.3 32 512 60.65 512 96V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H448zM96 96C78.33 96 64 110.3 64 128C64 145.7 78.33 160 96 160H416C433.7 160 448 145.7 448 128C448 110.3 433.7 96 416 96H96z"}
        ) 
      ]
    )
  }
}