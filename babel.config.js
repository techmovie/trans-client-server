
module.exports = {
  presets: [
    [
      '@babel/env',
      {
        targets: {
          node: 'current'
        }
      }]
  ],
  plugins: [
    [
      '@babel/transform-runtime',
      {
        corejs: '3'
      }
    ]
  ]
}
