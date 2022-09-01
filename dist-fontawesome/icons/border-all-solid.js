import { h } from 'vue'
export default {
  $_icon: {
    name: "BorderAll",
    vendor: "Fa",
    type: ["solid"],
    tags: ["border","all"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 448 512","fill":"currentColor","data-name":"fa-border-all"},
      [ 
        h(
          "path",
          {"d":"M384 32C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384zM384 96H256V224H384V96zM384 288H256V416H384V288zM192 224V96H64V224H192zM64 416H192V288H64V416z"}
        ) 
      ]
    )
  }
}