import { h } from 'vue'
export default {
  $_icon: {
    name: "Truck",
    vendor: "H",
    type: ["24","outline"],
    tags: ["truck"],
  },
  render() {
    return h(
      "svg",
      {"width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","xmlns":"http://www.w3.org/2000/svg","data-name":"h-truck"},
      [ 
        h(
          "path",
          {"d":"M8.25 18.75C8.25 19.5784 7.57843 20.25 6.75 20.25C5.92157 20.25 5.25 19.5784 5.25 18.75M8.25 18.75C8.25 17.9216 7.57843 17.25 6.75 17.25C5.92157 17.25 5.25 17.9216 5.25 18.75M8.25 18.75H14.25M5.25 18.75H3.375C2.75368 18.75 2.25 18.2463 2.25 17.625V14.2504M19.5 18.75C19.5 19.5784 18.8284 20.25 18 20.25C17.1716 20.25 16.5 19.5784 16.5 18.75M19.5 18.75C19.5 17.9216 18.8284 17.25 18 17.25C17.1716 17.25 16.5 17.9216 16.5 18.75M19.5 18.75L20.625 18.75C21.2463 18.75 21.7537 18.2457 21.7154 17.6256C21.5054 14.218 20.3473 11.0669 18.5016 8.43284C18.1394 7.91592 17.5529 7.60774 16.9227 7.57315H14.25M16.5 18.75H14.25M14.25 7.57315V6.61479C14.25 6.0473 13.8275 5.56721 13.263 5.50863C11.6153 5.33764 9.94291 5.25 8.25 5.25C6.55709 5.25 4.88466 5.33764 3.23698 5.50863C2.67252 5.56721 2.25 6.0473 2.25 6.61479V14.2504M14.25 7.57315V14.2504M14.25 18.75V14.2504M14.25 14.2504H2.25","stroke":"#0F172A","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}
        ) 
      ]
    )
  }
}