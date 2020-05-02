const fs = require('fs').promises;
const path = require('path');

async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname)
    const files = await fs.readdir(rootDir);
    walk(files, rootDir);
}

async function walk(files, rootDir) {
    for (let file of files) {
        const fileFUllPath = path.resolve(rootDir, file)
        const stats = await fs.stat(fileFUllPath)

        if (/\.git/g.test(fileFUllPath)) continue
        if (/\node_modules/g.test(fileFUllPath)) continue

        if (stats.isDirectory()) {
            readdir(fileFUllPath)
            continue
        }

        if ( !/\.html$/g.test(fileFUllPath)
        ) continue
        console.log(fileFUllPath)
    }
}

readdir('/home/luan/Área de Trabalho/Study')