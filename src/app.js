const clientId = '000000000000000000'; // Enter your Client ID here
const DiscordRPC = require('discord-rpc');
const RPC = new DiscordRPC.Client({ transport: 'ipc' });

DiscordRPC.register(clientId);

async function setActivity() {
  if (!RPC) return;
  RPC.setActivity({
    // This appears in the first text box in your RPC
    details: `Using Matrix on Element`, 
   // This appears in the second text box in your RPC
    state: `with Matrix`,
    startTimestamp: Date.now(),
    // This is the name of your large image key
    largeImageKey: `matrix`,
    // This is the text that appears once the image is hovered over
    largeImageText: `Matrix`,
    // This is the name of your large image key
    smallImageKey: `verified`,
    // This is the text that appears once the small image is hovered over
    smallImageText: `2 Verified Matrix sessions...`,
    instance: false,
    buttons: [
        {
            // This is the text for the first button
            label: `Matrix Website`,
            // This is the link for the first button
            url: `https://matrix.org/`
        },
        {
            // This is the text for the second button
            label: `Try Matrix today`,
            // THis is the link for the second button
            url: `https://matrix.org/docs/projects/try-matrix-now/`
        }
      ]
  });
}
// Do not tamper with this! 
RPC.on('ready', async () => {
  setActivity();

  setInterval(() => {
    setActivity();
  }, 15 * 1000);
})

RPC.login({ clientId }).catch(err => console.error(err));
// Do not tamper with this!