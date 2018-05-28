/* global cssRule */

SVG.Style = SVG.invent({
  create: 'style',
  inherit: SVG.Element,

  extend: {
    words: function (w) {
      this.node.textContent += (w || '')
      return this
    },

    font: function (name, src) {
      return this.rule('@font-face', {
        fontFamily: name,
        src: src
      })
    },

    rule: function (selector, obj) {
      return this.words(cssRule(selector, obj))
    }
  },

  construct: {
    style: function (selector, obj) {
      return this.put(new SVG.Style()).rule(selector, obj)
    },
    font: function (name, src) {
      return this.put(new SVG.Style()).font(name, src)
    }
  }
})
