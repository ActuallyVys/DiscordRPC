const clientId = '965334306060910703';
const DiscordRPC = require('discord-rpc');
const RPC = new DiscordRPC.Client({ transport: 'ipc' });

DiscordRPC.register(clientId);

async function setActivity() {
  if (!RPC) return;
  RPC.setActivity({
    details: `Using Matrix on Element`,
    state: `with Matrix`,
    startTimestamp: Date.now(),
    largeImageKey: `matrix`,
    largeImageText: `Matrix`,
    smallImageKey: `verified`,
    smallImageText: `2 Verified Matrix sessions...`,
    instance: false,
    buttons: [
        {
            label: `Matrix Website`,
            url: `https://matrix.org/`
        },
        {
        
            label: `Try Matrix today`,
            url: `https://matrix.org/docs/projects/try-matrix-now/`
        }
      ]
  });
}

RPC.on('ready', async () => {
  setActivity();

  setInterval(() => {
    setActivity();
  }, 15 * 1000);
})

RPC.login({ clientId }).catch(err => console.error(err));