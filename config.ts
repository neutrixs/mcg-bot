interface configData {
    token:string        
    prefix:string       
    botOwner:string         // Owner Discord ID
    ownerName:string        // Anything you want for credit
    NASAAPIKey:string       // For APOD Command. https://api.nasa.gov/
    accountKeyPath:string   // Firebase account key path ("./accountkey.json" for example)
}

/**
 * change the config below if you do not have enviroment variables set
 */

const config:configData = {
    token: process.env.TOKEN,
    prefix: process.env.PREFIX,
    botOwner: process.env.BOTOWNER,
    ownerName: process.env.OWNERNAME,
    NASAAPIKey: process.env.NASAAPIKEY,
    accountKeyPath: process.env.ACCOUNTKEYPATH
}

export default config