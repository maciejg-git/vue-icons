import { h } from 'vue'
export default {
  $_icon: {
    name: "SpeakerWave",
    vendor: "H",
    type: ["20","solid"],
    tags: ["speaker","wave"],
  },
  render() {
    return h(
      "svg",
      {"width":"20","height":"20","viewBox":"0 0 20 20","fill":"currentColor","xmlns":"http://www.w3.org/2000/svg","data-name":"h-speaker-wave"},
      [ 
        h(
          "path",
          {"d":"M10 3.75002C10 3.4508 9.82215 3.18021 9.54747 3.06153C9.2728 2.94286 8.95387 2.99879 8.73598 3.20387L4.70257 7.00002H3.16724C2.85725 7.00002 2.5792 7.19074 2.46756 7.47993C2.16534 8.26287 2 9.11302 2 10C2 10.887 2.16534 11.7372 2.46756 12.5201C2.5792 12.8093 2.85725 13 3.16724 13H4.70257L8.73598 16.7962C8.95387 17.0012 9.2728 17.0572 9.54747 16.9385C9.82215 16.8198 10 16.5492 10 16.25V3.75002Z","fill":"#0F172A"}
        ),
        h(
          "path",
          {"d":"M15.9498 5.05029C15.6569 4.7574 15.182 4.7574 14.8891 5.05029C14.5962 5.34318 14.5962 5.81806 14.8891 6.11095C17.037 8.25883 17.037 11.7412 14.8891 13.8891C14.5962 14.182 14.5962 14.6569 14.8891 14.9498C15.182 15.2427 15.6569 15.2427 15.9498 14.9498C18.6834 12.2161 18.6834 7.78396 15.9498 5.05029Z","fill":"#0F172A"}
        ),
        h(
          "path",
          {"d":"M13.8287 7.1716C13.5358 6.8787 13.0609 6.8787 12.768 7.1716C12.4751 7.46449 12.4751 7.93936 12.768 8.23226C13.7443 9.20857 13.7443 10.7915 12.768 11.7678C12.4751 12.0607 12.4751 12.5356 12.768 12.8285C13.0609 13.1213 13.5358 13.1213 13.8287 12.8285C15.3908 11.2664 15.3908 8.73369 13.8287 7.1716Z","fill":"#0F172A"}
        ) 
      ]
    )
  }
}