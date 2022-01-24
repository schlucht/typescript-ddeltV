import { Unit } from "./unit";
import C from '../const';

export class SaveUnit {
    private _prefix = 'ots_'
    constructor(public units: Unit[]) {

    }

    save(): Map<string, Unit[]> {
        let group = new Map<string, Unit[]>()
        let arr: Unit[] = []
        for (let i = 0; i < this.units.length; i++) {
            let folder = C.PREFIX + this.units[i].Folder;
            if (group.has(folder)) {
                group.get(folder).push(this.units[i])
            } else {
                arr.push(this.units[1])
                group.set(folder, arr)
            }
        }
        return group // LOG
    }
}