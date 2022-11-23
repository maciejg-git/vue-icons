import { h } from 'vue'
export default {
  $_icon: {
    name: "SpaceAwesome",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["brands"],
    tags: ["space","awesome"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M96 256H128V512H0V352H32V320H64V288H96V256zM512 352V512H384V256H416V288H448V320H480V352H512zM320 64H352V448H320V416H192V448H160V64H192V32H224V0H288V32H320V64zM288 128H224V192H288V128z"}
        ) 
      ]
    )
  }
}