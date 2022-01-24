import { Unit } from "./module/unit";
import C from './const'

export class ReadStorage {
    constructor() {}

    readStorage(): Map<string, Unit[]> {
        const map = new Map<string, Unit[]>()
        for (let x in window.localStorage) {
            
            if (x.indexOf(C.PREFIX) > -1) {
                console.log(x)
            }

        }
        
        return map;
    }
}