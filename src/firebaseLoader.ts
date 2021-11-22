import firebaseAdmin from 'firebase-admin'      // it's a commonjs module so it's imported like this (or else it won't work)
import { Client } from 'discord.js'
import config from '../config.js'
import { customCommand, customPrefixType, reactionRolesType, statusType } from './types/DBTypes'

export default class database{
    public DB: firebaseAdmin.firestore.Firestore
    public customCommands:customCommand
    public customPrefix:customPrefixType
    public reactionRoles:reactionRolesType
    public status: statusType
    public statusEnabled: boolean
    private clientID: string | null

    public constructor(client:Client){
        firebaseAdmin.initializeApp({
            credential: firebaseAdmin.credential.cert(config.accountKeyPath)
        })

        this.DB = firebaseAdmin.firestore()

        this.customCommands = null
        this.customPrefix = null
        this.reactionRoles = null
        this.status = null
        this.statusEnabled = false
        this.clientID = null
        
        client.on('ready',this.clientOnReady.bind(this))
    }

    private clientOnReady(clientData:Client<true>){
        this.clientID = clientData.user.id
    }
}