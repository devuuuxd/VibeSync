const axios = require('axios');

class VibeSync {
    /**
     * @param {Client} BotDevu 
     */
    constructor(BotDevu) {
        this.BotDevu = BotDevu;
    }

    /**
     * @param {String} ChannelId 
     * @param {String} status 
     * @returns {Promise<void>} 
     */
    async setVoiceStatus(ChannelId, status) {
        try {
            const response = await axios.put(
                `https://discord.com/api/v10/channels/${ChannelId}/voice-status`,
                { status: status.length > 0 ? status : 'Default Status' },
                { headers: { Authorization: `Bot ${this.BotDevu.token}` } }
            );

            console.log(`Voice channel status updated successfully`);
        } catch (error) {
            if (error.response) {
                console.error(`API Error (${error.response.status}): ${error.response.data.message}`);
            } else if (error.request) {
                console.error('No response received from API');
            } else {
                console.error(`Request Setup Error: ${error.message}`);
            }
            throw new Error(`An error occurred: ${error.message}`);
        }
    }
}

module.exports = { VibeSync };
