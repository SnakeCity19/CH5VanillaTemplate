const webXpanel = require('../node_modules/@crestron/ch5-webxpanel/dist/cjs/index.js');
 
const configuration = {
    host: '10.235.139.204',
    ipId: '4',
    roomid: 'VANTESTROOM'
};
 
if (webXpanel.isActive) {
    console.log(`WebXPanel version: ${webXpanel.getVersion()}`);
    console.log(`WebXPanel build date: ${webXpanel.getBuildDate()}`);
 
    webXpanel.default.initialize(configuration);
}
else {
   console.log('Skipping WebXPanel since running on touchpanel');
}
 
const CrComLib = require('../node_modules/@crestron/ch5-crcomlib/build_bundles/cjs/cr-com-lib.js');
 
window.CrComLib = CrComLib;
window.bridgeReceiveIntegerFromNative = CrComLib.bridgeReceiveIntegerFromNative;
window.bridgeReceiveBooleanFromNative = CrComLib.bridgeReceiveBooleanFromNative;
window.bridgeReceiveStringFromNative = CrComLib.bridgeReceiveStringFromNative;
window.bridgeReceiveObjectFromNative = CrComLib.bridgeReceiveObjectFromNative;