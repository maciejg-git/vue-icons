import { h } from 'vue'
export default {
  $_icon: {
    name: "Camera",
    vendor: "H",
    type: ["20","Solid"],
    tags: ["camera"],
  },
  render() {
    return h(
      "svg",
      {"width":"20","height":"20","viewBox":"0 0 20 20","fill":"currentColor","xmlns":"http://www.w3.org/2000/svg","data-name":"h-camera"},
      [ 
        h(
          "path",
          {"fill-rule":"evenodd","clip-rule":"evenodd","d":"M1 8C1 6.89543 1.89543 6 3 6H3.92963C4.59834 6 5.2228 5.6658 5.59373 5.1094L6.40627 3.8906C6.7772 3.3342 7.40166 3 8.07037 3H11.9296C12.5983 3 13.2228 3.3342 13.5937 3.8906L14.4063 5.1094C14.7772 5.6658 15.4017 6 16.0704 6H17C18.1046 6 19 6.89543 19 8V15C19 16.1046 18.1046 17 17 17H3C1.89543 17 1 16.1046 1 15V8ZM14.5 11C14.5 13.4853 12.4853 15.5 10 15.5C7.51472 15.5 5.5 13.4853 5.5 11C5.5 8.51472 7.51472 6.5 10 6.5C12.4853 6.5 14.5 8.51472 14.5 11ZM10 14C11.6569 14 13 12.6569 13 11C13 9.34315 11.6569 8 10 8C8.34315 8 7 9.34315 7 11C7 12.6569 8.34315 14 10 14Z","fill":"#0F172A"}
        ) 
      ]
    )
  }
}