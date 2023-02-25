const _mainpath = require("./_mainpath");
const fs = require("fs");

/** @param {Symbol} sym @param {string} cpath */
function _cdir(sym, cpath){
    if(!cpath) return new Error("cpath is undefined");

    if(cpath.startsWith(_mainpath(sym))) cpath = cpath.replace(_mainpath(sym), "").replace(/^\/|\/$/g, "");

    let parts = cpath.split("/");

    parts.forEach((part, i) => {
        let partpath = _mainpath(sym, parts.slice(0, i+1));
        if(!fs.existsSync(partpath)) fs.mkdirSync(partpath);
    });

    return "lol";
};

module.exports = _cdir;