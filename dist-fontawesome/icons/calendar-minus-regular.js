import { h } from 'vue'
export default {
  $_icon: {
    name: "CalendarMinus",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["regular"],
    tags: ["calendar","minus"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 448 512","fill":"currentColor","data-name":"fa-calendar-minus"},
      [ 
        h(
          "path",
          {"d":"M152 352C138.7 352 128 341.3 128 328C128 314.7 138.7 304 152 304H296C309.3 304 320 314.7 320 328C320 341.3 309.3 352 296 352H152zM128 0C141.3 0 152 10.75 152 24V64H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V64H384C419.3 64 448 92.65 448 128V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H104V24C104 10.75 114.7 0 128 0zM400 192H48V448C48 456.8 55.16 464 64 464H384C392.8 464 400 456.8 400 448V192z"}
        ) 
      ]
    )
  }
}