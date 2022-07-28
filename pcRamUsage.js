const os  =require('os');

setInterval(function() {
    const {arch, platform, totalmem, freemem} = os;
    const tRam = totalmem() /1024 /1024;
    const fRam = freemem() /1024 / 1024;
    const usage = (fRam / tRam) * 100;

    const stats = {
        OS: platform(),
        arch: arch(),
        totalRAM: `${parseInt(tRam)}MB`,
        FreeRAM: `${parseInt(fRam)}MB`,
        usage: `${usage.toFixed(2)}%`
    };
    console.clear()
    console.table(stats);
    exports.stats = stats;
}, 1000);

