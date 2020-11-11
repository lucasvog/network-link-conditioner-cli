<div align="center">
 <img width=100px src="https://raw.githubusercontent.com/lucasvog/node-network-link-conditioner/HEAD/assets/logo.jpg" alt="Logo of Node Network Link Conditioner Wrapper">



# Network Link Conditioner CLI
[![npm version](https://img.shields.io/npm/v/network-link-conditioner-cli.svg?style=flat-square)](https://www.npmjs.org/package/network-link-conditioner-cli)

*A node Network Link Conditioner CLI. 
Ideal for automating your test setup on a Mac.*

 </div>

## Notes
The Network Link Conditioner is a tool for developers that can change your Network speed on a system level, and has profiles like "EDGE", "3G" or "LTE" preinstalled.
This is also available as a [node package](https://www.npmjs.org/package/network-link-conditioner).
#### Caveats
This is using applescript to get or set parameters of the conditioner. As a result, you will see the UI pop up on your screen - so no perfect solution. Reason is, that there is no internal API to change the settings. 
You also have to allow the accessibility-setting in 🍎 >system preferences>security>Data security>Accessibility for the program executing this code. But normally you will be asked to do that the first time you execute a command.
#### Before using
 To use this, you will need to do the following things:
 1. Have a device/VM that runs MacOS
 2. Have the *Network Link Conditioner* installed. Instructions can be found [here](https://nshipster.com/network-link-conditioner/).

## Installation

 ```bash
$ npm install -g network-link-conditioner-cli
 ```

## Example

 ```bash
$ nlc on
 ```
 ```bash
$ nlc off
 ```
 ```bash
$ nlc set 3G
 ```

## Docs
**`nlc help`**
Shows help infos.

**`nlc on`**
Enables the Network Link Conditioner.

**`nlc off`**
Disables the Network Link Conditioner.

**`nlc profiles`**
Gets all available profiles.

**`nlc set [profile]`**
Sets a profile.

**`close`**
Closes the system preferences window.

