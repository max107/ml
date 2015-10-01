'use strict';

var settings = require('./settings.js'),
// Module to control application life.
    app = require('app'),
// Module to create native browser window.
    BrowserWindow = require('browser-window'),
// Report crashes to our server.
    crashReporter = require('crash-reporter');

crashReporter.start();

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var mainWindow = null;

// Quit when all windows are closed.
app.on('window-all-closed', function () {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    /*
     if (process.platform != 'darwin') {
     app.quit();
     }
     */
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function () {
    // Create the browser window.
    mainWindow = new BrowserWindow(settings.app);

    // and load the index.html of the app.
    mainWindow.loadUrl(settings.loadUrl);

    if (settings.debug) {
        // Open the DevTools.
        mainWindow.openDevTools();
    }

    // Emitted when the window is closed.
    mainWindow.on('closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
    });
});

var startMinecraft = function (auth_token) {
    var proc = spawn('java', [
        '-Djava.library.path=./libraries/natives',
        '-cp', './libraries/*:./minecraft.jar', 'net.minecraft.launchwrapper.Launch',
        '--username', username,
        '--password', password,
        '--gameDir', '.',
        '--assetsDir', './assets',
        '--assetIndex', '1.7.10',
        '--tweakClass', 'cpw.mods.fml.common.launcher.FMLTweaker',
        '--server', 'minecraft.mimi-cloud.com',
        '--port', '25565'
    ]);

    proc.stdout.setEncoding('utf8');
    proc.stdout.on('data', function (data) {
        var str = data.toString();
        var lines = str.split(/(\r?\n)/g);
        console.log(lines.join(""));
    });
    proc.stderr.on('data', function (data) {
        var str = data.toString();
        var lines = str.split(/(\r?\n)/g);
        console.log(lines.join(""));
    });

    proc.on('close', function (code) {
        console.log('process exit code ' + code);
    });
};