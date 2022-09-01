import { h } from 'vue'
export default {
  $_icon: {
    name: "TableCellsLarge",
    vendor: "Fa",
    type: ["solid"],
    tags: ["table","cells","large"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512","fill":"currentColor","data-name":"fa-table-cells-large"},
      [ 
        h(
          "path",
          {"d":"M448 32C483.3 32 512 60.65 512 96V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H448zM448 96H288V224H448V96zM448 288H288V416H448V288zM224 224V96H64V224H224zM64 416H224V288H64V416z"}
        ) 
      ]
    )
  }
}