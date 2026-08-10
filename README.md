# CloudFlare Bot Directory

<p align="center">
  <br>
  <img src="https://i.imgur.com/mXwNCvH.png" alt="cloudflare-bot-directory">
  <br>
</p>

![Last version](https://img.shields.io/github/tag/microlinkhq/cloudflare-bot-directory.svg?style=flat-square)
[![NPM Status](https://img.shields.io/npm/dm/cloudflare-bot-directory.svg?style=flat-square)](https://www.npmjs.org/package/cloudflare-bot-directory)

> A list of **500+ verified bots** and web crawlers sourced from [CloudFlare Radar](https://radar.cloudflare.com/traffic/verified-bots), available as a JSON dataset for bot detection, user agent analysis, and web scraping identification.

> [!NOTE]
> Not affiliated with or endorsed by Cloudflare, Inc. The dataset is licensed [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/) and limited to non-commercial use — see [License](#license).

## Why

Identifying legitimate bots from malicious scrapers is essential for web security and analytics. This package repackages the CloudFlare Radar verified bots directory as data, helping you:

- **Detect verified bots** – Identify legitimate crawlers like Googlebot, Bingbot, and more
- **Filter analytics** – Exclude known bots from your traffic reports
- **Allow-list crawlers** – Permit verified bots while blocking suspicious traffic
- **User agent lookup** – Match user agent strings against known bot patterns

## Data Structure

Each bot entry includes:

| Field               | Description                                    |
| ------------------- | ---------------------------------------------- |
| `slug`              | URL-friendly unique identifier                 |
| `name`              | Human-readable bot name                        |
| `kind`              | Bot kind classification                        |
| `operator`          | Company or organization operating the bot      |
| `operatorUrl`       | URL to operator's documentation                |
| `category`          | Bot category (Search Engine, Monitoring, etc.) |
| `description`       | What the bot does                              |
| `followsRobotsTxt`  | Whether the bot respects robots.txt            |
| `userAgentPatterns` | User agent pattern(s) for matching             |
| `userAgents`        | Known user agent string(s)                     |

## Install

```bash
npm install cloudflare-bot-directory
```

## Usage

```js
const bots = require('cloudflare-bot-directory')

// Get all bot slugs
console.log(bots.map(bot => bot.slug))
// ['2checkout', '360monitoring', 'googlebot', 'bingbot', ...]

// Find a specific bot
const googlebot = bots.find(bot => bot.slug === 'googlebot')

// Filter by category
const searchBots = bots.filter(bot => bot.category === 'Search Engine Crawler')

// Check if a user agent is a known bot
const isKnownBot = (userAgent) =>
  bots.some(bot => userAgent.includes(bot.name))
```

## Related

- [top-user-agents](https://github.com/microlinkhq/top-user-agents) – An always up-to-date list of the top 100 HTTP user-agents most used over the Internet.

## License

This project has two licenses, one for the code and one for the data. See [NOTICE](https://github.com/microlinkhq/cloudflare-bot-directory/blob/master/NOTICE) for the full statement.

**Code** (everything except `src/index.json`) © [Microlink](https://microlink.io), released under the [MIT](https://github.com/microlinkhq/cloudflare-bot-directory/blob/master/LICENSE.md) License.

**Data** (`src/index.json`) is sourced from [Cloudflare Radar Verified Bots](https://radar.cloudflare.com/traffic/verified-bots) by Cloudflare, Inc. and licensed under [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/). The data has been reformatted — fetched per bot, serialised into a single JSON array, with `userAgents` and `userAgentPatterns` trimmed of surrounding whitespace and empty entries removed. Values are otherwise unmodified. **Use of the dataset is restricted to non-commercial purposes.** For commercial use, contact radar@cloudflare.com.

Cloudflare's trademarks are not licensed under CC BY-NC 4.0. This project is not affiliated with, sponsored by, or endorsed by Cloudflare, Inc.

Authored and maintained by [Kiko Beats](https://kikobeats.com) with help from [contributors](https://github.com/microlinkhq/cloudflare-bot-directory/contributors).

> [microlink.io](https://microlink.io) · GitHub [microlinkhq](https://github.com/microlinkhq) · X [@microlinkhq](https://x.com/microlinkhq)
