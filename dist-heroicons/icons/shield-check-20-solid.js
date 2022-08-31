import { h } from 'vue'
export default {
  $_icon: {
    name: "ShieldCheck",
    vendor: "H",
    type: ["20","Solid"],
    tags: ["shield","check"],
  },
  render() {
    return h(
      "svg",
      {"width":"20","height":"20","viewBox":"0 0 20 20","fill":"currentColor","xmlns":"http://www.w3.org/2000/svg","data-name":"h-shield-check"},
      [ 
        h(
          "path",
          {"fill-rule":"evenodd","clip-rule":"evenodd","d":"M9.66109 2.23657C9.85709 2.07381 10.1429 2.07381 10.3389 2.23657C12.2777 3.84642 14.7315 4.85747 17.4166 4.98601C17.658 4.99756 17.8641 5.17189 17.8957 5.41143C17.9645 5.93129 18 6.46164 18 7.00028C18 12.1627 14.7401 16.5637 10.1665 18.2572C10.0593 18.2969 9.94102 18.2969 9.83378 18.2572C5.26004 16.5638 2 12.1627 2 7.00016C2 6.46156 2.03548 5.93125 2.10424 5.41144C2.13593 5.17189 2.34202 4.99756 2.58337 4.98601C5.2685 4.85748 7.72231 3.84643 9.66109 2.23657ZM13.8566 8.19113C14.1002 7.85614 14.0261 7.38708 13.6911 7.14345C13.3561 6.89982 12.8871 6.97388 12.6434 7.30887L9.15969 12.099L7.28033 10.2197C6.98744 9.92678 6.51256 9.92678 6.21967 10.2197C5.92678 10.5126 5.92678 10.9874 6.21967 11.2803L8.71967 13.7803C8.87477 13.9354 9.08999 14.0149 9.30867 13.9977C9.52734 13.9805 9.72754 13.8685 9.85655 13.6911L13.8566 8.19113Z","fill":"#0F172A"}
        ) 
      ]
    )
  }
}