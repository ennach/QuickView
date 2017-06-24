"use strict"

var glob = require('glob');
var setting = require('./setting.js');

var fileUtil = {
  fetchReadmeList: function (cb) {

    var result = [];
    var i = 0;

    var path = setting.Path;

    path = path.replace(/\\/, "/");
    if(path[path.length -2, path.length -1] !== "/"){
      path = path + "/";
    }
    glob(path + 'data/FG/**', function (err, matches) {
      matches.forEach(function(n){
          var name = n.replace(path + "data/FG/", "");
          if(name === '') {  }
          else if(name.match(/Thumbs/)){}
          else if(i == 0) { i++;}
          else if (name.match(/^(.*?)\/(.*?)\/(.*?)\//)){

            result.push(n);
          }
      });
      cb(null, result);
    });
  },
  Path: setting.Path
};

module.exports = fileUtil;
