/**
 * Module dependencies.
 */

const express = require('express'),
      myDatabase = require('./model/database'),
      http = require('http'),
      path = require('path'),
      pug = require('pug'),
      routes = require('./routes'),
      cookieParser = require('cookie-parser'),
      errHandler = require('errorhandler'),
      morgan = require('morgan'),
      fav = require('serve-favicon');

const app = express(),
      loadOptions = {
        debug:true,
        doctype:'html'
      };

// all environments
app.use(express.static(path.join(__dirname, 'public')));
app.use(fav('./public/images/favicon.png'));
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser('ecityCookieSecret'));
app.use(errHandler());

// view entry points
app.get('/', routes.index);

// setup DB
app.locals.database = new myDatabase();
app.locals.database.initialize();

// setup server and main loop
var server = http.createServer(app).listen(3000);
