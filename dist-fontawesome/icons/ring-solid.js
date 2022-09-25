import { h } from 'vue'
export default {
  $_icon: {
    name: "Ring",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["solid"],
    tags: ["ring"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512","fill":"currentColor","data-name":"fa-ring"},
      [ 
        h(
          "path",
          {"d":"M256 64C109.1 64 0 125.9 0 208v98.13C0 384.5 114.6 448 256 448s256-63.5 256-141.9V208C512 125.9 401.1 64 256 64zM256 288C203.1 288 155.1 279.1 120.4 264.6C155 249.9 201.6 240 256 240s101 9.875 135.6 24.62C356.9 279.1 308.9 288 256 288zM437.1 234.4C392.1 208.3 328.3 192 256 192S119.9 208.3 74.88 234.4C68 226.1 64 217.3 64 208C64 163.9 149.1 128 256 128c105.1 0 192 35.88 192 80C448 217.3 444 226.1 437.1 234.4z"}
        ) 
      ]
    )
  }
}