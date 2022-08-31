import { h } from 'vue'
export default {
  $_icon: {
    name: "Backward",
    vendor: "H",
    type: ["24","Solid"],
    tags: ["backward"],
  },
  render() {
    return h(
      "svg",
      {"width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","xmlns":"http://www.w3.org/2000/svg","data-name":"h-backward"},
      [ 
        h(
          "path",
          {"d":"M9.19474 18.4391C10.4447 19.1534 12 18.2508 12 16.8112V14.4707L18.9447 18.4391C20.1947 19.1534 21.75 18.2508 21.75 16.8112L21.75 8.68832C21.75 7.24865 20.1947 6.34609 18.9447 7.06036L12 11.0288V8.68832C12 7.24865 10.4447 6.34609 9.19474 7.06036L2.08725 11.1218C0.827597 11.8416 0.827596 13.6579 2.08725 14.3777L9.19474 18.4391Z","fill":"#0F172A"}
        ) 
      ]
    )
  }
}