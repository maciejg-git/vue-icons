import { h } from 'vue'
export default {
  $_icon: {
    name: "Gitter",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["Brands"],
    tags: ["gitter"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 384 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M66.4 322.5H16V0h50.4v322.5zM166.9 76.1h-50.4V512h50.4V76.1zm100.6 0h-50.4V512h50.4V76.1zM368 76h-50.4v247H368V76z"}
        ) 
      ]
    )
  }
}