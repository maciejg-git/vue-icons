import { h } from 'vue'
export default {
  $_icon: {
    name: "BoxArchive",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["solid"],
    tags: ["box","archive"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512","fill":"currentColor","data-name":"fa-box-archive"},
      [ 
        h(
          "path",
          {"d":"M32 432C32 458.5 53.49 480 80 480h352c26.51 0 48-21.49 48-48V160H32V432zM160 236C160 229.4 165.4 224 172 224h168C346.6 224 352 229.4 352 236v8C352 250.6 346.6 256 340 256h-168C165.4 256 160 250.6 160 244V236zM480 32H32C14.31 32 0 46.31 0 64v48C0 120.8 7.188 128 16 128h480C504.8 128 512 120.8 512 112V64C512 46.31 497.7 32 480 32z"}
        ) 
      ]
    )
  }
}