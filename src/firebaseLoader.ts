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
        this.firestoreListenerStart()
    }

    private firestoreListenerStart(){
        const thisClientCollection = this.DB.collection(this.clientID)

        thisClientCollection.doc('cc').onSnapshot(async snapshot=>{
            const dataAny:any = snapshot.data()     // any because otherwise it won't work
            const data:customCommand = dataAny

            if(data?.ccdata?.Data.length === undefined){
                const templateData:customCommand = {
                    ccdata: {
                        Data: []
                    }
                }

                await thisClientCollection.doc('cc').set(templateData)
                return
            }

            this.customCommands = data
        })

        thisClientCollection.doc('customprefix').onSnapshot(async snapshot=>{
            const dataAny:any = snapshot.data()
            const data:customPrefixType = dataAny

            if(!data?.prefixdata){
                const templateData:customPrefixType = {
                    prefixdata: {}
                }

                await thisClientCollection.doc('customprefix').set(templateData)
                return
            }

            this.customPrefix = data
        })

        thisClientCollection.doc('reactionroles').onSnapshot(async snapshot=>{
            const dataAny:any = snapshot.data()
            const data:reactionRolesType = dataAny

            if(!data?.reactionRoles){
                const templateData:reactionRolesType = {
                    reactionRoles:{}
                }

                await thisClientCollection.doc('reactionroles').set(templateData)
                return
            }

            this.reactionRoles = data
        })

        thisClientCollection.doc('status').onSnapshot(async snapshot=>{
            const dataAny:any = snapshot.data()
            const data:statusType = dataAny

            if(data?.status?.length === undefined){
                const templateData:statusType = {
                    status:[]
                }

                await thisClientCollection.doc('status').set(templateData)
                return
            }

            this.status = data
        })

        interface statusOnInterface {
            statusOn:boolean
        }

        thisClientCollection.doc('statuson').onSnapshot(async snapshot=>{
            const dataAny:any = snapshot.data()
            const data:statusOnInterface = dataAny

            if(data?.statusOn === undefined){
                const templateData:statusOnInterface = {
                    statusOn: false
                }

                await thisClientCollection.doc('statuson').set(templateData)
                return
            }

            this.statusEnabled = data.statusOn
        })
    }
}