import { h } from 'vue'
export default {
  $_icon: {
    name: "Ethernet",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["solid"],
    tags: ["ethernet"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M0 224V416c0 17.7 14.3 32 32 32H96V336c0-8.8 7.2-16 16-16s16 7.2 16 16V448h64V336c0-8.8 7.2-16 16-16s16 7.2 16 16V448h64V336c0-8.8 7.2-16 16-16s16 7.2 16 16V448h64V336c0-8.8 7.2-16 16-16s16 7.2 16 16V448h64c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32H448V160c0-17.7-14.3-32-32-32H384V96c0-17.7-14.3-32-32-32H160c-17.7 0-32 14.3-32 32v32H96c-17.7 0-32 14.3-32 32v32H32c-17.7 0-32 14.3-32 32z"}
        ) 
      ]
    )
  }
}