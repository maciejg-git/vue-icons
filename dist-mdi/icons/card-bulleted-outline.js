import { h } from 'vue'
export default {
  $_icon: {
    name: "CardBulletedOutline",
    vendor: "Mdi",
    type: [],
    tags: ["card","bulleted","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-card-bulleted-outline"},
      [ 
        h(
          "path",
          {"d":"M12,15H10V13H12V15M18,15H14V13H18V15M8,11H6V9H8V11M18,11H10V9H18V11M20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20M4,6V18H20V6H4Z"}
        ) 
      ]
    )
  }
}