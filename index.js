#!/usr/bin/env node
var nlc = require("network-link-conditioner");
var args = require('minimist')(process.argv.slice(2));
const chalk = require('chalk');
var figlet = require('figlet');
cli(args);
async function cli(args) {
    let cmd = args._[0] || 'help';
    if (cmd == "v" || cmd == "-v") {
        cmd = 'version';
    }

    if (cmd == "h" || cmd == "-h") {
        cmd = 'help';
    }
    if (cmd == "-p") {
        cmd = 'profiles';
    }
    if (cmd == "-s") {
        cmd = 'set';
    }
    switch (cmd) {
        case 'version':
            const package = require("./package.json");
            console.log("The current version is: " + package.version);
            break;

        case 'help':
            help(args);
            break;

        case 'on':
            await nlc.on();
            break;

        case 'off':
            await nlc.off();
            break;

        case 'profiles':
            try {
                const profiles = await nlc.getProfileNames();
                for (const profile of profiles) {
                    console.log(profile);
                }
            } catch (e) {
                console.error(chalk.red("Error getting profiles."))
                console.error(e.stderr);
            }
            break;
        case 'set':
            if (args._[1] == undefined || args._[1] == null || args._[1] == "") {
                console.log('no profile specified. Try Try "nlc help" for more infos.');
                return;
            }
            var profile = args._[1];
            try {
                await nlc.setProfile(profile);
            } catch (e) {
                console.error(chalk.red("Error setting profile."));
                console.error(e.stderr);
            }
            break;
        case 'close':
            nlc.closeSystemPreferences();
            break
        default:
            console.error(chalk.red(`"${cmd}" is not a valid command. Try "nlc help" for more infos.`));
            break;
    }
}

function help(args) {
    figlet('NLC Help', function (err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(chalk.green(data))
        console.log("Network Link Conditioner CLI");
        console.log("")
        console.log(chalk.yellow("Commands"));
        console.log(chalk.cyan("on") + " : Turns the Network Link Conditioner on.")
        console.log(chalk.cyan("off") + " : Turns the Network Link Conditioner off.")
        console.log(chalk.cyan("profiles") + " : Shows all available profiles.")
        console.log(chalk.cyan("set [profile]") + " : Sets a profile.")
        console.log(chalk.cyan("close") + " : Closes the system preferences.")
        console.log(chalk.cyan("help") + " : Shows this.")
        console.log("")
        console.log(chalk.yellow("Examples"));
        console.log("nlc on")
        console.log("nlc set 3G")
        console.log("")
    });

}
