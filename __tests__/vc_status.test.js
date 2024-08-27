const { VCStatus } = require('../index');
const { Client } = require('discord.js');
const axios = require('axios');

jest.mock('axios');

jest.mock('discord.js', () => {
  return {
    Client: jest.fn().mockImplementation(() => ({
      token: 'fake-token',
    })),
  };
});

test('VCStatus class exists', () => {
  const client = new Client();
  const vcStatus = new VCStatus(client);
  expect(vcStatus).toBeDefined();
});
