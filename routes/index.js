/*
 * GET home page.
 */
const pug = require('pug'),
      indexFile = pug.compileFile('./views/index.pug');

//app.get('/', routes.index);
exports.index = function(req, res){
    console.log(pug.render(indexFile({err:false, defaultUsername:''})));
    res.write(pug.render(indexFile({err:false, defaultUsername:''})));
};