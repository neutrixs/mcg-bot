
# MCG Indonesia discord bot

# Changelog from v1.0

 - Update to supports <a href="https://github.com/discordjs/discord.js">Discord.js</a> v13.0.1
 - `announce` command removed. use `ann` instead
 - Update to new MCG logo on `ann` command
 - Fix permission mistake on `react` command
 
 # Requirements
 
 - Node.js v16.6.0 or higher
 - NPM
 - Google Firebase Firestore
 
 # Installation
 - **Downloading the source code**
	 - **Manual download**
		 1. Go to releases
		 2. Select version
		 3. Download the source code
	- **Using GIT,**
		 **Use either one of these:**
		- `git clone git@github.com:neutrixs/mcg-bot.git`
		- `git clone git@github.com:neutrixs/mcg-bot.git#tags`
		
		**Example:**
		- `git clone git@github.com:neutrixs/mcg-bot.git#1.1`

- **Setting up Firebase Firestore**
	1. Create a project on https://console.firebase.google.com
	2. Go to firestore > Create database
	3. Go to project settings > Service accounts > Generate new private key
	4. Move the private key to your project's home directory and rename it to `accountkey.json`

- **Setting up `botconfig.js`**
	- Set up default prefix, owner discord id, bot token, and other stuff there

- **Running the bot**
	- Install all required module `npm install`
	- run the bot `node .`

