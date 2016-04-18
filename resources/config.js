({
  baseUrl: "theme/example",
  name: "license-selector-pattern",
  out: "theme/example/license-selector-bundle.js",
  optimize: "uglify2",
  preserveLicenseComments: false,
  paths: {
    "react": "../../node_modules/react/dist/react",
    "react-dom": "../../node_modules/react-dom/dist/react-dom",
    "redux": "../../node_modules/redux/dist/redux",
    "pat-registry": "empty:"
  }
})
