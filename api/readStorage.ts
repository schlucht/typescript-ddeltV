import { Unit } from "./module/unit";
import C from './const'

export class ReadStorage {
    constructor() {}

    readStorage(): Map<string, Unit[]> {
        const map = new Map<string, Unit[]>()
        let b: Unit[] = []
        let name = ''
        for (let storageKey in window.localStorage) {
            
            if (storageKey.indexOf(C.PREFIX) > -1) {                
                b = JSON.parse(window.localStorage.getItem(storageKey)) as Unit[]  
                name = storageKey.substring(C.PREFIX.length)
                map.set(name, b)              
            }
        }  
        return map;
    }
}