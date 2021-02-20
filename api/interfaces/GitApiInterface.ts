import * as GitInterfaces from "./GitInterfaces"
import * as VSSInterfaces from "./common/VSSInterfaces";
import * as TfsCoreInterfaces from "./CoreInterfaces";
export interface IGitApi{
    createAnnotatedTag(tagObject: GitInterfaces.GitAnnotatedTag, project: string, repositoryId: string): Promise<GitInterfaces.GitAnnotatedTag>;
    getAnnotatedTag(project: string, repositoryId: string, objectId: string): Promise<GitInterfaces.GitAnnotatedTag>;
    getBlob(repositoryId: string, sha1: string, project: string, download: boolean, fileName: string, resolveLfs: boolean): Promise<GitInterfaces.GitBlobRef>;
    getBlobContent(repositoryId: string, sha1: string, project: string, download: boolean, fileName: string, resolveLfs: boolean): Promise<string>;
    getBlobsZip(blobIds: string[], repositoryId: string, project: string, filename: string): Promise<string>;
    getBlobZip(repositoryId: string, sha1: string, project: string, download: boolean, fileName: string, resolveLfs: boolean): Promise<string>;
    getBranch(repositoryId: string, name: string, project: string, baseVersionDescriptor: GitInterfaces.GitVersionDescriptor): Promise<GitInterfaces.GitBranchStats>;
    getBranches(repositoryId: string, project: string, baseVersionDescriptor: GitInterfaces.GitVersionDescriptor): Promise<GitInterfaces.GitBranchStats[]>;
    getBranchStatsBatch(searchCriteria: GitInterfaces.GitQueryBranchStatsCriteria, repositoryId: string, project: string): Promise<GitInterfaces.GitBranchStats[]>;
    getChanges(commitId: string, repositoryId: string, project: string, top: number, skip: number): Promise<GitInterfaces.GitCommitChanges>;
    getCherryPickConflict(repositoryId: string, cherryPickId: number, conflictId: number, project: string): Promise<GitInterfaces.GitConflict>;
    getCherryPickConflicts(repositoryId: string, cherryPickId: number, project: string, continuationToken: string, top: number, excludeResolved: boolean, onlyResolved: boolean, includeObsolete: boolean): Promise<GitInterfaces.GitConflict[]>;
    updateCherryPickConflict(conflict: GitInterfaces.GitConflict, repositoryId: string, cherryPickId: number, conflictId: number, project: string): Promise<GitInterfaces.GitConflict>;
    updateCherryPickConflicts(conflictUpdates: GitInterfaces.GitConflict[], repositoryId: string, cherryPickId: number, project: string): Promise<GitInterfaces.GitConflictUpdateResult[]>;
    getCherryPickRelationships(repositoryNameOrId: string, commitId: string, project: string, includeLinks: boolean): Promise<GitInterfaces.GitCommitRef[]>;
    createCherryPick(cherryPickToCreate: GitInterfaces.GitAsyncRefOperationParameters, project: string, repositoryId: string): Promise<GitInterfaces.GitCherryPick>;
    getCherryPick(project: string, cherryPickId: number, repositoryId: string): Promise<GitInterfaces.GitCherryPick>;
    getCherryPickForRefName(project: string, repositoryId: string, refName: string): Promise<GitInterfaces.GitCherryPick>;
    getCommitDiffs(repositoryId: string, project: string, diffCommonCommit: boolean, top: number, skip: number, baseVersionDescriptor: GitInterfaces.GitBaseVersionDescriptor, targetVersionDescriptor: GitInterfaces.GitTargetVersionDescriptor): Promise<GitInterfaces.GitCommitDiffs>;
    getCommit(commitId: string, repositoryId: string, project: string, changeCount: number): Promise<GitInterfaces.GitCommit>;
    getCommits(repositoryId: string, searchCriteria: GitInterfaces.GitQueryCommitsCriteria, project: string, skip: number, top: number): Promise<GitInterfaces.GitCommitRef[]>;
    getPushCommits(repositoryId: string, pushId: number, project: string, top: number, skip: number, includeLinks: boolean): Promise<GitInterfaces.GitCommitRef[]>;
    getCommitsBatch(searchCriteria: GitInterfaces.GitQueryCommitsCriteria, repositoryId: string, project: string, skip: number, top: number, includeStatuses: boolean): Promise<GitInterfaces.GitCommitRef[]>;
    getDeletedRepositories(project: string): Promise<GitInterfaces.GitDeletedRepository[]>;
    getFileDiffs(fileDiffsCriteria: GitInterfaces.FileDiffsCriteria, project: string, repositoryId: string): Promise<GitInterfaces.FileDiff[]>;
    getForks(repositoryNameOrId: string, collectionId: string, project: string, includeLinks: boolean): Promise<GitInterfaces.GitRepositoryRef[]>;
    createForkSyncRequest(syncParams: GitInterfaces.GitForkSyncRequestParameters, repositoryNameOrId: string, project: string, includeLinks: boolean): Promise<GitInterfaces.GitForkSyncRequest>;
    getForkSyncRequest(repositoryNameOrId: string, forkSyncOperationId: number, project: string, includeLinks: boolean): Promise<GitInterfaces.GitForkSyncRequest>;
    getForkSyncRequests(repositoryNameOrId: string, project: string, includeAbandoned: boolean, includeLinks: boolean): Promise<GitInterfaces.GitForkSyncRequest[]>;
    createImportRequest(importRequest: GitInterfaces.GitImportRequest, project: string, repositoryId: string): Promise<GitInterfaces.GitImportRequest>;
    getImportRequest(project: string, repositoryId: string, importRequestId: number): Promise<GitInterfaces.GitImportRequest>;
    queryImportRequests(project: string, repositoryId: string, includeAbandoned: boolean): Promise<GitInterfaces.GitImportRequest[]>;
    updateImportRequest(importRequestToUpdate: GitInterfaces.GitImportRequest, project: string, repositoryId: string, importRequestId: number): Promise<GitInterfaces.GitImportRequest>;
    getItem(repositoryId: string, path: string, project: string, scopePath: string, recursionLevel: GitInterfaces.VersionControlRecursionType, includeContentMetadata: boolean, latestProcessedChange: boolean, download: boolean, versionDescriptor: GitInterfaces.GitVersionDescriptor, includeContent: boolean, resolveLfs: boolean, sanitize: boolean): Promise<GitInterfaces.GitItem>;
    getItemContent(repositoryId: string, path: string, project: string, scopePath: string, recursionLevel: GitInterfaces.VersionControlRecursionType, includeContentMetadata: boolean, latestProcessedChange: boolean, download: boolean, versionDescriptor: GitInterfaces.GitVersionDescriptor, includeContent: boolean, resolveLfs: boolean, sanitize: boolean): Promise<string>;
    getItems(repositoryId: string, project: string, scopePath: string, recursionLevel: GitInterfaces.VersionControlRecursionType, includeContentMetadata: boolean, latestProcessedChange: boolean, download: boolean, includeLinks: boolean, versionDescriptor: GitInterfaces.GitVersionDescriptor): Promise<GitInterfaces.GitItem[]>;
    getItemText(repositoryId: string, path: string, project: string, scopePath: string, recursionLevel: GitInterfaces.VersionControlRecursionType, includeContentMetadata: boolean, latestProcessedChange: boolean, download: boolean, versionDescriptor: GitInterfaces.GitVersionDescriptor, includeContent: boolean, resolveLfs: boolean, sanitize: boolean): Promise<string>;
    getItemZip(repositoryId: string, path: string, project: string, scopePath: string, recursionLevel: GitInterfaces.VersionControlRecursionType, includeContentMetadata: boolean, latestProcessedChange: boolean, download: boolean, versionDescriptor: GitInterfaces.GitVersionDescriptor, includeContent: boolean, resolveLfs: boolean, sanitize: boolean): Promise<string>;
    getItemsBatch(requestData: GitInterfaces.GitItemRequestData, repositoryId: string, project: string): Promise<GitInterfaces.GitItem[][]>;
    getMergeBases(repositoryNameOrId: string, commitId: string, otherCommitId: string, project: string, otherCollectionId: string, otherRepositoryId: string): Promise<GitInterfaces.GitCommitRef[]>;
    createMergeRequest(mergeParameters: GitInterfaces.GitMergeParameters, project: string, repositoryNameOrId: string, includeLinks: boolean): Promise<GitInterfaces.GitMerge>;
    getMergeRequest(project: string, repositoryNameOrId: string, mergeOperationId: number, includeLinks: boolean): Promise<GitInterfaces.GitMerge>;
    createAttachment(customHeaders: any, contentStream: string, fileName: string, repositoryId: string, pullRequestId: number, project: string): Promise<GitInterfaces.Attachment>;
    deleteAttachment(fileName: string, repositoryId: string, pullRequestId: number, project: string): Promise<void>;
    getAttachmentContent(fileName: string, repositoryId: string, pullRequestId: number, project: string): Promise<string>;
    getAttachments(repositoryId: string, pullRequestId: number, project: string): Promise<GitInterfaces.Attachment[]>;
    getAttachmentZip(fileName: string, repositoryId: string, pullRequestId: number, project: string): Promise<string>;
    createLike(repositoryId: string, pullRequestId: number, threadId: number, commentId: number, project: string): Promise<void>;
    deleteLike(repositoryId: string, pullRequestId: number, threadId: number, commentId: number, project: string): Promise<void>;
    getLikes(repositoryId: string, pullRequestId: number, threadId: number, commentId: number, project: string): Promise<VSSInterfaces.IdentityRef[]>;
    getPullRequestIterationCommits(repositoryId: string, pullRequestId: number, iterationId: number, project: string, top: number, skip: number): Promise<GitInterfaces.GitCommitRef[]>;
    getPullRequestCommits(repositoryId: string, pullRequestId: number, project: string): Promise<GitInterfaces.GitCommitRef[]>;
    getPullRequestConflict(repositoryId: string, pullRequestId: number, conflictId: number, project: string): Promise<GitInterfaces.GitConflict>;
    getPullRequestConflicts(repositoryId: string, pullRequestId: number, project: string, skip: number, top: number, includeObsolete: boolean, excludeResolved: boolean, onlyResolved: boolean): Promise<GitInterfaces.GitConflict[]>;
    updatePullRequestConflict(conflict: GitInterfaces.GitConflict, repositoryId: string, pullRequestId: number, conflictId: number, project: string): Promise<GitInterfaces.GitConflict>;
    updatePullRequestConflicts(conflictUpdates: GitInterfaces.GitConflict[], repositoryId: string, pullRequestId: number, project: string): Promise<GitInterfaces.GitConflictUpdateResult[]>;
    getPullRequestIterationChanges(repositoryId: string, pullRequestId: number, iterationId: number, project: string, top: number, skip: number, compareTo: number): Promise<GitInterfaces.GitPullRequestIterationChanges>;
    getPullRequestIteration(repositoryId: string, pullRequestId: number, iterationId: number, project: string): Promise<GitInterfaces.GitPullRequestIteration>;
    getPullRequestIterations(repositoryId: string, pullRequestId: number, project: string, includeCommits: boolean): Promise<GitInterfaces.GitPullRequestIteration[]>;
    createPullRequestIterationStatus(status: GitInterfaces.GitPullRequestStatus, repositoryId: string, pullRequestId: number, iterationId: number, project: string): Promise<GitInterfaces.GitPullRequestStatus>;
    deletePullRequestIterationStatus(repositoryId: string, pullRequestId: number, iterationId: number, statusId: number, project: string): Promise<void>;
    getPullRequestIterationStatus(repositoryId: string, pullRequestId: number, iterationId: number, statusId: number, project: string): Promise<GitInterfaces.GitPullRequestStatus>;
    getPullRequestIterationStatuses(repositoryId: string, pullRequestId: number, iterationId: number, project: string): Promise<GitInterfaces.GitPullRequestStatus[]>;
    updatePullRequestIterationStatuses(customHeaders: any, patchDocument: VSSInterfaces.JsonPatchDocument, repositoryId: string, pullRequestId: number, iterationId: number, project: string): Promise<void>;
    createPullRequestLabel(label: TfsCoreInterfaces.WebApiCreateTagRequestData, repositoryId: string, pullRequestId: number, project: string, projectId: string): Promise<TfsCoreInterfaces.WebApiTagDefinition>;
    deletePullRequestLabels(repositoryId: string, pullRequestId: number, labelIdOrName: string, project: string, projectId: string): Promise<void>;
    getPullRequestLabel(repositoryId: string, pullRequestId: number, labelIdOrName: string, project: string, projectId: string): Promise<TfsCoreInterfaces.WebApiTagDefinition>;
    getPullRequestLabels(repositoryId: string, pullRequestId: number, project: string, projectId: string): Promise<TfsCoreInterfaces.WebApiTagDefinition[]>;
    getPullRequestProperties(repositoryId: string, pullRequestId: number, project: string): Promise<any>;
    updatePullRequestProperties(customHeaders: any, patchDocument: VSSInterfaces.JsonPatchDocument, repositoryId: string, pullRequestId: number, project: string): Promise<any>;
    getPullRequestQuery(queries: GitInterfaces.GitPullRequestQuery, repositoryId: string, project: string): Promise<GitInterfaces.GitPullRequestQuery>;
    createPullRequestReviewer(reviewer: GitInterfaces.IdentityRefWithVote, repositoryId: string, pullRequestId: number, reviewerId: string, project: string): Promise<GitInterfaces.IdentityRefWithVote>;
    createPullRequestReviewers(reviewers: VSSInterfaces.IdentityRef[], repositoryId: string, pullRequestId: number, project: string): Promise<GitInterfaces.IdentityRefWithVote[]>;
    deletePullRequestReviewer(repositoryId: string, pullRequestId: number, reviewerId: string, project: string): Promise<void>;
    getPullRequestReviewer(repositoryId: string, pullRequestId: number, reviewerId: string, project: string): Promise<GitInterfaces.IdentityRefWithVote>;
    getPullRequestReviewers(repositoryId: string, pullRequestId: number, project: string): Promise<GitInterfaces.IdentityRefWithVote[]>;
    updatePullRequestReviewer(reviewer: GitInterfaces.IdentityRefWithVote, repositoryId: string, pullRequestId: number, reviewerId: string, project: string): Promise<GitInterfaces.IdentityRefWithVote>;
    updatePullRequestReviewers(patchVotes: GitInterfaces.IdentityRefWithVote[], repositoryId: string, pullRequestId: number, project: string): Promise<void>;
    getPullRequestById(pullRequestId: number, project: string): Promise<GitInterfaces.GitPullRequest>;
    getPullRequestsByProject(project: string, searchCriteria: GitInterfaces.GitPullRequestSearchCriteria, maxCommentLength: number, skip: number, top: number): Promise<GitInterfaces.GitPullRequest[]>;
    createPullRequest(gitPullRequestToCreate: GitInterfaces.GitPullRequest, repositoryId: string, project: string, supportsIterations: boolean): Promise<GitInterfaces.GitPullRequest>;
    getPullRequest(repositoryId: string, pullRequestId: number, project: string, maxCommentLength: number, skip: number, top: number, includeCommits: boolean, includeWorkItemRefs: boolean): Promise<GitInterfaces.GitPullRequest>;
    getPullRequests(repositoryId: string, searchCriteria: GitInterfaces.GitPullRequestSearchCriteria, project: string, maxCommentLength: number, skip: number, top: number): Promise<GitInterfaces.GitPullRequest[]>;
    updatePullRequest(gitPullRequestToUpdate: GitInterfaces.GitPullRequest, repositoryId: string, pullRequestId: number, project: string): Promise<GitInterfaces.GitPullRequest>;
    sharePullRequest(userMessage: GitInterfaces.ShareNotificationContext, repositoryId: string, pullRequestId: number, project: string): Promise<void>;
    createPullRequestStatus(status: GitInterfaces.GitPullRequestStatus, repositoryId: string, pullRequestId: number, project: string): Promise<GitInterfaces.GitPullRequestStatus>;
    deletePullRequestStatus(repositoryId: string, pullRequestId: number, statusId: number, project: string): Promise<void>;
    getPullRequestStatus(repositoryId: string, pullRequestId: number, statusId: number, project: string): Promise<GitInterfaces.GitPullRequestStatus>;
    getPullRequestStatuses(repositoryId: string, pullRequestId: number, project: string): Promise<GitInterfaces.GitPullRequestStatus[]>;
    updatePullRequestStatuses(customHeaders: any, patchDocument: VSSInterfaces.JsonPatchDocument, repositoryId: string, pullRequestId: number, project: string): Promise<void>;
    createComment(comment: GitInterfaces.Comment, repositoryId: string, pullRequestId: number, threadId: number, project: string): Promise<GitInterfaces.Comment>;
    deleteComment(repositoryId: string, pullRequestId: number, threadId: number, commentId: number, project: string): Promise<void>;
    getComment(repositoryId: string, pullRequestId: number, threadId: number, commentId: number, project: string): Promise<GitInterfaces.Comment>;
    getComments(repositoryId: string, pullRequestId: number, threadId: number, project: string): Promise<GitInterfaces.Comment[]>;
    updateComment(comment: GitInterfaces.Comment, repositoryId: string, pullRequestId: number, threadId: number, commentId: number, project: string): Promise<GitInterfaces.Comment>;
    createThread(commentThread: GitInterfaces.GitPullRequestCommentThread, repositoryId: string, pullRequestId: number, project: string): Promise<GitInterfaces.GitPullRequestCommentThread>;
    getPullRequestThread(repositoryId: string, pullRequestId: number, threadId: number, project: string, iteration: number, baseIteration: number): Promise<GitInterfaces.GitPullRequestCommentThread>;
    getThreads(repositoryId: string, pullRequestId: number, project: string, iteration: number, baseIteration: number): Promise<GitInterfaces.GitPullRequestCommentThread[]>;
    updateThread(commentThread: GitInterfaces.GitPullRequestCommentThread, repositoryId: string, pullRequestId: number, threadId: number, project: string): Promise<GitInterfaces.GitPullRequestCommentThread>;
    getPullRequestWorkItemRefs(repositoryId: string, pullRequestId: number, project: string): Promise<VSSInterfaces.ResourceRef[]>;
    createPush(push: GitInterfaces.GitPush, repositoryId: string, project: string): Promise<GitInterfaces.GitPush>;
    getPush(repositoryId: string, pushId: number, project: string, includeCommits: number, includeRefUpdates: boolean): Promise<GitInterfaces.GitPush>;
    getPushes(repositoryId: string, project: string, skip: number, top: number, searchCriteria: GitInterfaces.GitPushSearchCriteria): Promise<GitInterfaces.GitPush[]>;
    deleteRepositoryFromRecycleBin(project: string, repositoryId: string): Promise<void>;
    getRecycleBinRepositories(project: string): Promise<GitInterfaces.GitDeletedRepository[]>;
    restoreRepositoryFromRecycleBin(repositoryDetails: GitInterfaces.GitRecycleBinRepositoryDetails, project: string, repositoryId: string): Promise<GitInterfaces.GitRepository>;
    getRefs(repositoryId: string, project: string, filter: string, includeLinks: boolean, includeStatuses: boolean, includeMyBranches: boolean, latestStatusesOnly: boolean, peelTags: boolean, filterContains: string): Promise<GitInterfaces.GitRef[]>;
    updateRef(newRefInfo: GitInterfaces.GitRefUpdate, repositoryId: string, filter: string, project: string, projectId: string): Promise<GitInterfaces.GitRef>;
    updateRefs(refUpdates: GitInterfaces.GitRefUpdate[], repositoryId: string, project: string, projectId: string): Promise<GitInterfaces.GitRefUpdateResult[]>;
    createFavorite(favorite: GitInterfaces.GitRefFavorite, project: string): Promise<GitInterfaces.GitRefFavorite>;
    deleteRefFavorite(project: string, favoriteId: number): Promise<void>;
    getRefFavorite(project: string, favoriteId: number): Promise<GitInterfaces.GitRefFavorite>;
    getRefFavorites(project: string, repositoryId: string, identityId: string): Promise<GitInterfaces.GitRefFavorite[]>;
    createRepository(gitRepositoryToCreate: GitInterfaces.GitRepositoryCreateOptions, project: string, sourceRef: string): Promise<GitInterfaces.GitRepository>;
    deleteRepository(repositoryId: string, project: string): Promise<void>;
    getRepositories(project: string, includeLinks: boolean, includeAllUrls: boolean, includeHidden: boolean): Promise<GitInterfaces.GitRepository[]>;
    getRepository(repositoryId: string, project: string): Promise<GitInterfaces.GitRepository>;
    getRepositoryWithParent(repositoryId: string, includeParent: boolean, project: string): Promise<GitInterfaces.GitRepository>;
    updateRepository(newRepositoryInfo: GitInterfaces.GitRepository, repositoryId: string, project: string): Promise<GitInterfaces.GitRepository>;
    getRevertConflict(repositoryId: string, revertId: number, conflictId: number, project: string): Promise<GitInterfaces.GitConflict>;
    getRevertConflicts(repositoryId: string, revertId: number, project: string, continuationToken: string, top: number, excludeResolved: boolean, onlyResolved: boolean, includeObsolete: boolean): Promise<GitInterfaces.GitConflict[]>;
    updateRevertConflict(conflict: GitInterfaces.GitConflict, repositoryId: string, revertId: number, conflictId: number, project: string): Promise<GitInterfaces.GitConflict>;
    updateRevertConflicts(conflictUpdates: GitInterfaces.GitConflict[], repositoryId: string, revertId: number, project: string): Promise<GitInterfaces.GitConflictUpdateResult[]>;
    createRevert(revertToCreate: GitInterfaces.GitAsyncRefOperationParameters, project: string, repositoryId: string): Promise<GitInterfaces.GitRevert>;
    getRevert(project: string, revertId: number, repositoryId: string): Promise<GitInterfaces.GitRevert>;
    getRevertForRefName(project: string, repositoryId: string, refName: string): Promise<GitInterfaces.GitRevert>;
    createCommitStatus(gitCommitStatusToCreate: GitInterfaces.GitStatus, commitId: string, repositoryId: string, project: string): Promise<GitInterfaces.GitStatus>;
    getStatuses(commitId: string, repositoryId: string, project: string, top: number, skip: number, latestOnly: boolean): Promise<GitInterfaces.GitStatus[]>;
    getSuggestions(repositoryId: string, project: string): Promise<GitInterfaces.GitSuggestion[]>;
    getTree(repositoryId: string, sha1: string, project: string, projectId: string, recursive: boolean, fileName: string): Promise<GitInterfaces.GitTreeRef>;
    getTreeZip(repositoryId: string, sha1: string, project: string, projectId: string, recursive: boolean, fileName: string): Promise<string>;
}