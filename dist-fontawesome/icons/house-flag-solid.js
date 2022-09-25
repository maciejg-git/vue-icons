import { h } from 'vue'
export default {
  $_icon: {
    name: "HouseFlag",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["solid"],
    tags: ["house","flag"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 640 512","fill":"currentColor","data-name":"fa-house-flag"},
      [ 
        h(
          "path",
          {"d":"M480 0C497.7 0 512 14.33 512 32H624C632.8 32 640 39.16 640 48V176C640 184.8 632.8 192 624 192H512V512H448V32C448 14.33 462.3 0 480 0V0zM416 512H416.1L416.8 512H352C334.3 512 320 497.7 320 480V384C320 366.3 305.7 352 288 352H224C206.3 352 192 366.3 192 384V480C192 497.7 177.7 512 160 512H96C78.33 512 64 497.7 64 480V288H31.1C18.61 288 6.631 279.7 1.985 267.1C-2.661 254.5 1.005 240.4 11.17 231.7L235.2 39.7C247.2 29.43 264.8 29.43 276.8 39.7L416 159V512z"}
        ) 
      ]
    )
  }
}