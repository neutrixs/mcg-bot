
# MCG Indonesia discord bot

# Changelog from v1.0

 - Update to supports <a href="https://github.com/discordjs/discord.js">Discord.js</a> v13.0.1
 - `announce` command removed. use `ann` instead
 - Update to new MCG logo on `ann` command
 - Fix permission mistake on `react` command
 - User info command rewritten almost entirely
 
 # Requirements
 
 - Node.js v16.6.0 or higher
 - NPM
 - Google Firebase Firestore
 
 # Installation
 - **Downloading the source code**
	 - **Manual download**
	 	<ol type="1">
			<li>Go to releases</li>
			<li>Select version</li>
			<li>Download the source code</li>
		</ol>
	- **Using GIT,**
		 **Use either one of these:**
		- `git clone git@github.com:neutrixs/mcg-bot.git`
		- `git clone git@github.com:neutrixs/mcg-bot.git#tags`
		
		**Example:**
		- `git clone git@github.com:neutrixs/mcg-bot.git#1.1`

- **Setting up Firebase Firestore**
	<ol type="1">
		<li>Create a project on <a href="https://console.firebase.google.com">https://console.firebase.google.com</a></li>
		<li>Go to firestore > Create database</li>
		<li>Go to project settings > Service accounts > Generate new private key</li>
		<li>Move the private key to your project's home directory and rename it to <code>accountkey.json</code></li>
	</ol>

- **Setting up `botconfig.js`**
	- Set up default prefix, owner discord id, bot token, and other stuff there

- **Running the bot**
	- Install all required module `npm install`
	- run the bot `node .`