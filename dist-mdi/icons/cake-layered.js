import { h } from 'vue'
export default {
  $_icon: {
    name: "CakeLayered",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["cake","layered"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-cake-layered"},
      [ 
        h(
          "path",
          {"d":"M21,21V17C21,15.89 20.1,15 19,15H18V12C18,10.89 17.1,10 16,10H13V8H11V10H8C6.89,10 6,10.89 6,12V15H5C3.89,15 3,15.89 3,17V21H1V23H23V21M12,7A2,2 0 0,0 14,5C14,4.62 13.9,4.27 13.71,3.97L12,1L10.28,3.97C10.1,4.27 10,4.62 10,5A2,2 0 0,0 12,7Z"}
        ) 
      ]
    )
  }
}