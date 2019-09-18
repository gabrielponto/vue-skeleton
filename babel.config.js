module.exports = {
  presets: [
    '@vue/app',
    [
      "@babel/preset-env",
      {
        modules: false
      }
    ]
  ],
  plugins: [
    "@babel/plugin-proposal-object-rest-spread",
    "@babel/plugin-transform-spread",
    "@babel/plugin-transform-modules-commonjs"
  ]
}
