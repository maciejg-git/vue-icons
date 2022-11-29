import { h } from 'vue'
export default {
  $_icon: {
    name: "Moon",
    vendor: "H",
    license: "MIT",
    type: ["20","Solid"],
    tags: ["moon"],
  },
  render() {
    return h(
      "svg",
      {"width":"20","height":"20","viewBox":"0 0 20 20","fill":"currentColor","xmlns":"http://www.w3.org/2000/svg"},
      [ 
        h(
          "path",
          {"fill-rule":"evenodd","clip-rule":"evenodd","d":"M7.45519 2.00383C7.68518 2.18752 7.78646 2.48878 7.71414 2.77411C7.57443 3.32534 7.5 3.90336 7.5 4.49984C7.5 8.36583 10.634 11.4998 14.5 11.4998C15.6435 11.4998 16.721 11.2262 17.6724 10.7415C17.9347 10.6079 18.2509 10.6401 18.4809 10.8238C18.7109 11.0075 18.8122 11.3088 18.7399 11.5941C17.8069 15.2754 14.4725 17.9998 10.5 17.9998C5.80558 17.9998 2 14.1943 2 9.49984C2 6.19127 3.89048 3.32555 6.64671 1.92156C6.909 1.78795 7.22519 1.82013 7.45519 2.00383Z","fill":"#0F172A"}
        ) 
      ]
    )
  }
}