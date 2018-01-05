/*
 * GET home page.
 */
const pug = require('pug'),
      indexFile = pug.compileFile('./views/index.pug');

//app.get('/', routes.index);
exports.index = function(req, res){
    res.send(pug.render(indexFile({err:false, defaultUsername:''})));
};