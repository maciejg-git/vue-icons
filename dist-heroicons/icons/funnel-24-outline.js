import { h } from 'vue'
export default {
  $_icon: {
    name: "Funnel",
    vendor: "H",
    type: ["24","outline"],
    tags: ["funnel"],
  },
  render() {
    return h(
      "svg",
      {"width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","xmlns":"http://www.w3.org/2000/svg","data-name":"h-funnel"},
      [ 
        h(
          "path",
          {"d":"M12.0001 3C14.7548 3 17.4552 3.23205 20.0831 3.67767C20.6159 3.76803 21 4.23355 21 4.77402V5.81802C21 6.41476 20.7629 6.98705 20.341 7.40901L14.909 12.841C14.4871 13.2629 14.25 13.8352 14.25 14.432V17.3594C14.25 18.2117 13.7685 18.9908 13.0062 19.3719L9.75 21V14.432C9.75 13.8352 9.51295 13.2629 9.09099 12.841L3.65901 7.40901C3.23705 6.98705 3 6.41476 3 5.81802V4.77404C3 4.23357 3.38408 3.76805 3.91694 3.67769C6.54479 3.23206 9.24533 3 12.0001 3Z","stroke":"#0F172A","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}
        ) 
      ]
    )
  }
}