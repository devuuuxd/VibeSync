# VibeSync

`VibeSync` is a Node.js library designed to update the status of a Discord voice channel. This library simplifies the process of setting custom statuses for voice channels using the Discord API.

## Installation

To install `VibeSync`, run:

```bash
npm install VibeSync
```
# Usage
## Importing and Setup
First, you need to import the VCStatus class and initialize it with your Discord bot client.
```js
const { Client, GatewayIntentBits } = require('discord.js');
const { VibeSync } = require('VibeSync');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});
const vcStatus = new VibeSync(client);

```
## Updating Voice Channel Status
Use the `updateVoiceChannel` method to set a custom status for a specific voice channel.
```js
    const channelId = 'CHANNEL_ID_HERE';  
    const status = 'CUSTOM_STATUS_HERE';

    vcStatus.setVoiceStatus(channelId, status)
        .then(() => console.log('Voice channel status updated successfully'))
        .catch(err => console.error('Failed to update voice channel status:', err));

```

# Example
## Here’s a complete example demonstrating how to use `VibeSync`:
```js
const { Client, GatewayIntentBits } = require('discord.js');
const { VibeSync } = require('VibeSync');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

const vcStatus = new VibeSync(client);

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);

    const channelId = 'CHANNEL_ID_HERE';  
    const status = 'CUSTOM_STATUS_HERE';

    const channel = client.channels.cache.get(channelId);

    if (!channel) {
        console.error('Voice channel not found');
        return;
    }

    vcStatus.setVoiceStatus(channelId, status)
        .then(() => console.log('Voice channel status updated successfully'))
        .catch(err => console.error('Failed to update voice channel status:', err));
});


client.login('TOKEN_HERE');
```

# Error Handling
## The updateVoiceChannel method handles errors by differentiating between:

- API Errors: Errors received from the Discord API.
- No Response: Cases where no response is received from the API.
- Request Setup Errors: Issues with setting up the request.
- Errors are logged with color-coded messages using chalk.
  
# Contributing
## Feel free to contribute to `VibeSync` by submitting issues or pull requests. Your contributions are welcome!

# License
## `VibeSync` is licensed under the MIT License. See the LICENSE file for more information.
### Feel free to adjust the examples and instructions according to your specific requirements. Let me know if you need any changes or additional details!


