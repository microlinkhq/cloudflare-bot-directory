'use strict'

const test = require('ava').default

const bot = require('cloudflare-bot-directory')

test('there is not empty string on arrays', t => {
  t.false(bot.some(bot => bot.userAgents.some(userAgent => userAgent === '')))
  t.false(
    bot.some(bot =>
      bot.userAgentPatterns.some(userAgentPattern => userAgentPattern === '')
    )
  )
})

test('there is no values starting with whitespace on arrays', t => {
  t.false(
    bot.some(bot => bot.userAgents.some(userAgent => userAgent.startsWith(' ')))
  )
  t.false(
    bot.some(bot =>
      bot.userAgentPatterns.some(userAgentPattern =>
        userAgentPattern.startsWith(' ')
      )
    )
  )
})

test('there is no placeholder values on arrays', t => {
  const isPlaceholder = value => /^\[.*\]$/.test(value)
  t.false(bot.some(bot => bot.userAgents.some(isPlaceholder)))
  t.false(bot.some(bot => bot.userAgentPatterns.some(isPlaceholder)))
})
