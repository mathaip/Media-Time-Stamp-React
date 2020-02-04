const IPFSClient = require('ipfs-http-client');
const ipfs = IPFSClient({ host: 'localhost', port: '5001', protocol: 'https' })
    //run with local daemon
    // const ipfsApi = require(‘ipfs-api’);
    // const ipfs = new ipfsApi(‘localhost’, ‘5001’, {protocol:‘http’});
export default ipfs;