#!/usr/bin/env node
import yargs from 'yargs'
import fs from 'fs-extra'
import path from 'path'

const args: any = yargs.options({
    name: {type: 'string', demandOption: true, alias: 'n'}
}).argv;

// tsxpress --name project-name

const {name} = args

fs.mkdir(`./${name}`, (error: Error) => {
    if(error){
        console.log("Could not create project!")
        process.exit(0)
    }

    const srcDir = `${path.resolve(__dirname)}/../tsxpress-template`
    const destDir = `./${name}`

    fs.copySync(srcDir, destDir);
    console.log("Project created successfully!")
    process.exit(0);

})

