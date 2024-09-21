import { h } from 'vue'
export default {
  $_icon: {
    name: "LinkSlash",
    vendor: "H",
    license: "MIT",
    type: ["16","Solid"],
    tags: ["link","slash"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 16 16","fill":"currentColor","aria-hidden":"true","data-slot":"icon"},
      [ 
        h(
          "path",
          {"d":"M3.28 2.22a.75.75 0 0 0-1.06 1.06l10.5 10.5a.75.75 0 1 0 1.06-1.06l-2.999-3a3.5 3.5 0 0 0-.806-3.695.75.75 0 0 0-1.06 1.061c.374.374.569.861.584 1.352L7.116 6.055l1.97-1.97a2 2 0 0 1 3.208 2.3.75.75 0 0 0 1.346.662 3.501 3.501 0 0 0-5.615-4.022l-1.97 1.97L3.28 2.22ZM3.705 9.616a.75.75 0 0 0-1.345-.663 3.501 3.501 0 0 0 5.615 4.022l.379-.379a.75.75 0 0 0-1.061-1.06l-.379.378a2 2 0 0 1-3.209-2.298Z"}
        ) 
      ]
    )
  }
}