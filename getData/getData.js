require('dotenv').config();
const youtubeData = require('./youtubeData');
const soundCloudData = require('./soundCloudData');

youtubeData();
soundCloudData();

// console.log('Update successful! :)');