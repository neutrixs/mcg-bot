import firebaseAdmin from 'firebase-admin'
import config from '../config.js'
import { customCommand, customPrefixType, reactionRolesType, statusType } from './types/DBTypes'

export default class database{
    public DB: firebaseAdmin.firestore.Firestore
    public customCommands:customCommand
    public customPrefix:customPrefixType
    public reactionRoles:reactionRolesType
    public status: statusType
    public statusEnabled: boolean

    public constructor(){
        firebaseAdmin.initializeApp({
            credential: firebaseAdmin.credential.cert(config.accountKeyPath)
        })

        this.DB = firebaseAdmin.firestore()

        this.customCommands = null
        this.customPrefix = null
        this.reactionRoles = null
        this.status = null
        this.statusEnabled = false
    }
}