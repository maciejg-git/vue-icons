import { h } from 'vue'
export default {
  $_icon: {
    name: "ReceiptRefund",
    vendor: "H",
    license: "MIT",
    type: ["24","outline"],
    tags: ["receipt","refund"],
  },
  render() {
    return h(
      "svg",
      {"width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","xmlns":"http://www.w3.org/2000/svg"},
      [ 
        h(
          "path",
          {"d":"M8.25 9.75H13.125C14.5747 9.75 15.75 10.9253 15.75 12.375C15.75 13.8247 14.5747 15 13.125 15H12M8.25 9.75L10.5 7.5M8.25 9.75L10.5 12M19.5 4.75699V21.75L15.75 20.25L12 21.75L8.25 20.25L4.5 21.75V4.75699C4.5 3.649 5.30608 2.70014 6.40668 2.57241C8.24156 2.35947 10.108 2.25 12 2.25C13.892 2.25 15.7584 2.35947 17.5933 2.57241C18.6939 2.70014 19.5 3.649 19.5 4.75699Z","stroke":"#0F172A","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}
        ) 
      ]
    )
  }
}