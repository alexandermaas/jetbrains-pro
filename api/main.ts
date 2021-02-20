import {LoggedGitApi} from "./LoggedGitApi";
import {GitApi} from "./GitApi";

const gitApi=new GitApi()
const loggedGitApi=new LoggedGitApi(gitApi)

gitApi.createAnnotatedTag(undefined,undefined,undefined)
gitApi.createComment(undefined,undefined,undefined,undefined,undefined)
gitApi.createAttachment(undefined,undefined,undefined,undefined,undefined,undefined)

// loggedGitApi.createAnnotatedTag(undefined,undefined,undefined)
// loggedGitApi.createComment(undefined,undefined,undefined,undefined,undefined)
// loggedGitApi.createAttachment(undefined,undefined,undefined,undefined,undefined,undefined)