import { h } from 'vue'
export default {
  $_icon: {
    name: "HouseLaptop",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["solid"],
    tags: ["house","laptop"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 640 512","fill":"currentColor","data-name":"fa-house-laptop"},
      [ 
        h(
          "path",
          {"d":"M218.3 8.486C230.6-2.829 249.4-2.829 261.7 8.486L469.7 200.5C476.4 206.7 480 215.2 480 224H336C316.9 224 299.7 232.4 288 245.7V208C288 199.2 280.8 192 272 192H208C199.2 192 192 199.2 192 208V272C192 280.8 199.2 288 208 288H271.1V416H112C85.49 416 64 394.5 64 368V256H32C18.83 256 6.996 247.9 2.198 235.7C-2.6 223.4 .6145 209.4 10.3 200.5L218.3 8.486zM336 256H560C577.7 256 592 270.3 592 288V448H624C632.8 448 640 455.2 640 464C640 490.5 618.5 512 592 512H303.1C277.5 512 255.1 490.5 255.1 464C255.1 455.2 263.2 448 271.1 448H303.1V288C303.1 270.3 318.3 256 336 256zM352 304V448H544V304H352z"}
        ) 
      ]
    )
  }
}