'use strict'

const { readFileSync } = require('node:fs')
const path = require('node:path')
const test = require('ava').default

const rootPath = path.resolve(__dirname, '..')
const read = filename => readFileSync(path.join(rootPath, filename), 'utf8')

const pkg = require('../package.json')
const notice = read('NOTICE')
const readme = read('README.md')
const license = read('LICENSE.md')

test('NOTICE credits Cloudflare as the data source', t => {
  t.true(notice.includes('Cloudflare, Inc.'))
  t.true(notice.includes('https://radar.cloudflare.com/traffic/verified-bots'))
  t.true(notice.includes('https://creativecommons.org/licenses/by-nc/4.0/'))
})

test('NOTICE ships inside the published package', t => {
  t.true(pkg.files.includes('NOTICE'))
})

test('package license declares both the code and the data terms', t => {
  t.is(pkg.license, 'MIT AND CC-BY-NC-4.0')
})

test('MIT license disclaims coverage of the dataset', t => {
  t.true(license.includes('src/index.json'))
  t.true(license.includes('CC BY-NC 4.0'))
})

test('README states the non-commercial restriction and the data source', t => {
  t.true(readme.includes('CC BY-NC 4.0'))
  t.true(readme.includes('non-commercial'))
  t.true(readme.includes('Cloudflare, Inc.'))
})

test('README disclaims affiliation and never calls the data official', t => {
  t.true(readme.includes('not affiliated with, sponsored by, or endorsed by'))
  t.false(/\bofficial\b/i.test(readme))
})
