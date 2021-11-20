interface configData {
    token:string        
    prefix:string       
    botOwner:string     // Owner Discord ID
    ownerName:string    // Anything you want for credit
    NASAAPIKey:string   // For APOD Command. https://api.nasa.gov/
}

/**
 * change the config below if you do not have enviroment variables set
 */

const config:configData = {
    token: process.env.TOKEN,
    prefix: process.env.PREFIX,
    botOwner: process.env.BOTOWNER,
    ownerName: process.env.OWNERNAME,
    NASAAPIKey: process.env.NASAAPIKEY
}

export default config