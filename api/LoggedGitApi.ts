import {IGitApi} from "./interfaces/GitApiInterface";
import {GitApi} from "./GitApi";

export class LoggedGitApi implements IGitApi{
    constructor(private gitApi:GitApi) {
    }
    /*
        (return this\.\w+Api.\w+\(.+): [\w\[\]]+(, .+)?(\))
        $1$2$3
    * */
}