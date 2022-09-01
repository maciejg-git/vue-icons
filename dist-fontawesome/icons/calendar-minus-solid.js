import { h } from 'vue'
export default {
  $_icon: {
    name: "CalendarMinus",
    vendor: "Fa",
    type: ["solid"],
    tags: ["calendar","minus"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 448 512","fill":"currentColor","data-name":"fa-calendar-minus"},
      [ 
        h(
          "path",
          {"d":"M160 32V64H288V32C288 14.33 302.3 0 320 0C337.7 0 352 14.33 352 32V64H400C426.5 64 448 85.49 448 112V160H0V112C0 85.49 21.49 64 48 64H96V32C96 14.33 110.3 0 128 0C145.7 0 160 14.33 160 32zM0 192H448V464C448 490.5 426.5 512 400 512H48C21.49 512 0 490.5 0 464V192zM312 376C325.3 376 336 365.3 336 352C336 338.7 325.3 328 312 328H136C122.7 328 112 338.7 112 352C112 365.3 122.7 376 136 376H312z"}
        ) 
      ]
    )
  }
}