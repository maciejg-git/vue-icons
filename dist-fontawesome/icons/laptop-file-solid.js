import { h } from 'vue'
export default {
  $_icon: {
    name: "LaptopFile",
    vendor: "Fa",
    type: ["solid"],
    tags: ["laptop","file"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 640 512","fill":"currentColor","data-name":"fa-laptop-file"},
      [ 
        h(
          "path",
          {"d":"M192 96C192 113.7 206.3 128 224 128H320V192H288C243.8 192 208 227.8 208 272V384C187.1 384 169.3 397.4 162.7 416H48C21.49 416 0 394.5 0 368V48C0 21.49 21.49 0 48 0H192V96zM240 272C240 245.5 261.5 224 288 224H544C570.5 224 592 245.5 592 272V416H624C632.8 416 640 423.2 640 432V448C640 483.3 611.3 512 576 512H256C220.7 512 192 483.3 192 448V432C192 423.2 199.2 416 208 416H240V272zM304 288V416H528V288H304zM320 96H224V0L320 96z"}
        ) 
      ]
    )
  }
}