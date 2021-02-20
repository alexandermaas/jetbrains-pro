import {
    Attachment,
    FileDiff,
    FileDiffsCriteria,
    GitAnnotatedTag,
    GitAsyncRefOperationParameters, GitBaseVersionDescriptor, GitBlobRef, GitBranchStats,
    GitCherryPick, GitCommit,
    GitCommitChanges, GitCommitDiffs,
    GitCommitRef, GitConflict, GitConflictUpdateResult, GitDeletedRepository,
    GitForkSyncRequest, GitForkSyncRequestParameters, GitImportRequest, GitItem,
    GitItemRequestData, GitMerge,
    GitMergeParameters, GitPullRequest,
    GitPullRequestCommentThread, GitPullRequestIteration,
    GitPullRequestIterationChanges, GitPullRequestQuery,
    GitPullRequestSearchCriteria, GitPullRequestStatus, GitPush,
    GitPushSearchCriteria, GitQueryBranchStatsCriteria,
    GitQueryCommitsCriteria, GitRecycleBinRepositoryDetails,
    GitRef,
    GitRefFavorite,
    GitRefUpdate,
    GitRefUpdateResult, GitRepository, GitRepositoryCreateOptions, GitRepositoryRef, GitRevert,
    GitStatus, GitSuggestion,
    GitTargetVersionDescriptor, GitTreeRef, GitVersionDescriptor,
    IdentityRefWithVote,
    ShareNotificationContext,
    VersionControlRecursionType
} from "./interfaces/GitInterfaces";
import {IdentityRef, JsonPatchDocument, ResourceRef} from "./interfaces/common/VSSInterfaces";
import {IGitApi} from "./interfaces/GitApiInterface";
import {WebApiCreateTagRequestData, WebApiTagDefinition} from "./interfaces/CoreInterfaces";

export class GitApi implements IGitApi{
    createAnnotatedTag(tagObject: GitAnnotatedTag, project: string, repositoryId: string): Promise<GitAnnotatedTag> {
        return Promise.resolve("createAnnotatedTag") as any;
    }

    createAttachment(customHeaders: any, contentStream: string, fileName: string, repositoryId: string, pullRequestId: number, project: string): Promise<Attachment> {
        return Promise.resolve("createAttachment") as any;
    }

    createCherryPick(cherryPickToCreate: GitAsyncRefOperationParameters, project: string, repositoryId: string): Promise<GitCherryPick> {
        return Promise.resolve("createCherryPick") as any;
    }

    createComment(comment: Comment, repositoryId: string, pullRequestId: number, threadId: number, project: string): Promise<Comment> {
        return Promise.resolve("createComment") as any;
    }

    createCommitStatus(gitCommitStatusToCreate: GitStatus, commitId: string, repositoryId: string, project: string): Promise<GitStatus> {
        return Promise.resolve("createCommitStatus") as any;
    }

    createFavorite(favorite: GitRefFavorite, project: string): Promise<GitRefFavorite> {
        return Promise.resolve("createFavorite") as any;
    }

    createForkSyncRequest(syncParams: GitForkSyncRequestParameters, repositoryNameOrId: string, project: string, includeLinks: boolean): Promise<GitForkSyncRequest> {
        return Promise.resolve("createForkSyncRequest") as any;
    }

    createImportRequest(importRequest: GitImportRequest, project: string, repositoryId: string): Promise<GitImportRequest> {
        return Promise.resolve("createImportRequest") as any;
    }

    createLike(repositoryId: string, pullRequestId: number, threadId: number, commentId: number, project: string): Promise<void> {
        return Promise.resolve("createLike") as any;
    }

    createMergeRequest(mergeParameters: GitMergeParameters, project: string, repositoryNameOrId: string, includeLinks: boolean): Promise<GitMerge> {
        return Promise.resolve("createMergeRequest") as any;
    }

    createPullRequest(gitPullRequestToCreate: GitPullRequest, repositoryId: string, project: string, supportsIterations: boolean): Promise<GitPullRequest> {
        return Promise.resolve("createPullRequest") as any;
    }

    createPullRequestIterationStatus(status: GitPullRequestStatus, repositoryId: string, pullRequestId: number, iterationId: number, project: string): Promise<GitPullRequestStatus> {
        return Promise.resolve("createPullRequestIterationStatus") as any;
    }

    createPullRequestLabel(label: WebApiCreateTagRequestData, repositoryId: string, pullRequestId: number, project: string, projectId: string): Promise<WebApiTagDefinition> {
        return Promise.resolve("createPullRequestLabel") as any;
    }

    createPullRequestReviewer(reviewer: IdentityRefWithVote, repositoryId: string, pullRequestId: number, reviewerId: string, project: string): Promise<IdentityRefWithVote> {
        return Promise.resolve("createPullRequestReviewer") as any;
    }

    createPullRequestReviewers(reviewers: IdentityRef[], repositoryId: string, pullRequestId: number, project: string): Promise<IdentityRefWithVote[]> {
        return Promise.resolve([]);
    }

    createPullRequestStatus(status: GitPullRequestStatus, repositoryId: string, pullRequestId: number, project: string): Promise<GitPullRequestStatus> {
        return Promise.resolve("createPullRequestStatus") as any;
    }

    createPush(push: GitPush, repositoryId: string, project: string): Promise<GitPush> {
        return Promise.resolve("createPush") as any;
    }

    createRepository(gitRepositoryToCreate: GitRepositoryCreateOptions, project: string, sourceRef: string): Promise<GitRepository> {
        return Promise.resolve("createRepository") as any;
    }

    createRevert(revertToCreate: GitAsyncRefOperationParameters, project: string, repositoryId: string): Promise<GitRevert> {
        return Promise.resolve("createRevert") as any;
    }

    createThread(commentThread: GitPullRequestCommentThread, repositoryId: string, pullRequestId: number, project: string): Promise<GitPullRequestCommentThread> {
        return Promise.resolve("createThread") as any;
    }

    deleteAttachment(fileName: string, repositoryId: string, pullRequestId: number, project: string): Promise<void> {
        return Promise.resolve("deleteAttachment") as any;
    }

    deleteComment(repositoryId: string, pullRequestId: number, threadId: number, commentId: number, project: string): Promise<void> {
        return Promise.resolve("deleteComment") as any;
    }

    deleteLike(repositoryId: string, pullRequestId: number, threadId: number, commentId: number, project: string): Promise<void> {
        return Promise.resolve("deleteLike") as any;
    }

    deletePullRequestIterationStatus(repositoryId: string, pullRequestId: number, iterationId: number, statusId: number, project: string): Promise<void> {
        return Promise.resolve("deletePullRequestIterationStatus") as any;
    }

    deletePullRequestLabels(repositoryId: string, pullRequestId: number, labelIdOrName: string, project: string, projectId: string): Promise<void> {
        return Promise.resolve("deletePullRequestLabels") as any;
    }

    deletePullRequestReviewer(repositoryId: string, pullRequestId: number, reviewerId: string, project: string): Promise<void> {
        return Promise.resolve("deletePullRequestReviewer") as any;
    }

    deletePullRequestStatus(repositoryId: string, pullRequestId: number, statusId: number, project: string): Promise<void> {
        return Promise.resolve("deletePullRequestStatus") as any;
    }

    deleteRefFavorite(project: string, favoriteId: number): Promise<void> {
        return Promise.resolve("deleteRefFavorite") as any;
    }

    deleteRepository(repositoryId: string, project: string): Promise<void> {
        return Promise.resolve("deleteRepository") as any;
    }

    deleteRepositoryFromRecycleBin(project: string, repositoryId: string): Promise<void> {
        return Promise.resolve("deleteRepositoryFromRecycleBin") as any;
    }

    getAnnotatedTag(project: string, repositoryId: string, objectId: string): Promise<GitAnnotatedTag> {
        return Promise.resolve("getAnnotatedTag") as any;
    }

    getAttachmentContent(fileName: string, repositoryId: string, pullRequestId: number, project: string): Promise<string> {
        return Promise.resolve("");
    }

    getAttachmentZip(fileName: string, repositoryId: string, pullRequestId: number, project: string): Promise<string> {
        return Promise.resolve("");
    }

    getAttachments(repositoryId: string, pullRequestId: number, project: string): Promise<Attachment[]> {
        return Promise.resolve([]);
    }

    getBlob(repositoryId: string, sha1: string, project: string, download: boolean, fileName: string, resolveLfs: boolean): Promise<GitBlobRef> {
        return Promise.resolve("getBlob") as any;
    }

    getBlobContent(repositoryId: string, sha1: string, project: string, download: boolean, fileName: string, resolveLfs: boolean): Promise<string> {
        return Promise.resolve("");
    }

    getBlobZip(repositoryId: string, sha1: string, project: string, download: boolean, fileName: string, resolveLfs: boolean): Promise<string> {
        return Promise.resolve("");
    }

    getBlobsZip(blobIds: string[], repositoryId: string, project: string, filename: string): Promise<string> {
        return Promise.resolve("");
    }

    getBranch(repositoryId: string, name: string, project: string, baseVersionDescriptor: GitVersionDescriptor): Promise<GitBranchStats> {
        return Promise.resolve("getBranch") as any;
    }

    getBranchStatsBatch(searchCriteria: GitQueryBranchStatsCriteria, repositoryId: string, project: string): Promise<GitBranchStats[]> {
        return Promise.resolve([]);
    }

    getBranches(repositoryId: string, project: string, baseVersionDescriptor: GitVersionDescriptor): Promise<GitBranchStats[]> {
        return Promise.resolve([]);
    }

    getChanges(commitId: string, repositoryId: string, project: string, top: number, skip: number): Promise<GitCommitChanges> {
        return Promise.resolve("getChanges") as any;
    }

    getCherryPick(project: string, cherryPickId: number, repositoryId: string): Promise<GitCherryPick> {
        return Promise.resolve("getCherryPick") as any;
    }

    getCherryPickConflict(repositoryId: string, cherryPickId: number, conflictId: number, project: string): Promise<GitConflict> {
        return Promise.resolve("getCherryPickConflict") as any;
    }

    getCherryPickConflicts(repositoryId: string, cherryPickId: number, project: string, continuationToken: string, top: number, excludeResolved: boolean, onlyResolved: boolean, includeObsolete: boolean): Promise<GitConflict[]> {
        return Promise.resolve([]);
    }

    getCherryPickForRefName(project: string, repositoryId: string, refName: string): Promise<GitCherryPick> {
        return Promise.resolve("getCherryPickForRefName") as any;
    }

    getCherryPickRelationships(repositoryNameOrId: string, commitId: string, project: string, includeLinks: boolean): Promise<GitCommitRef[]> {
        return Promise.resolve([]);
    }

    getComment(repositoryId: string, pullRequestId: number, threadId: number, commentId: number, project: string): Promise<Comment> {
        return Promise.resolve("getComment") as any;
    }

    getComments(repositoryId: string, pullRequestId: number, threadId: number, project: string): Promise<Comment[]> {
        return Promise.resolve([]);
    }

    getCommit(commitId: string, repositoryId: string, project: string, changeCount: number): Promise<GitCommit> {
        return Promise.resolve("getCommit") as any;
    }

    getCommitDiffs(repositoryId: string, project: string, diffCommonCommit: boolean, top: number, skip: number, baseVersionDescriptor: GitBaseVersionDescriptor, targetVersionDescriptor: GitTargetVersionDescriptor): Promise<GitCommitDiffs> {
        return Promise.resolve("getCommitDiffs") as any;
    }

    getCommits(repositoryId: string, searchCriteria: GitQueryCommitsCriteria, project: string, skip: number, top: number): Promise<GitCommitRef[]> {
        return Promise.resolve([]);
    }

    getCommitsBatch(searchCriteria: GitQueryCommitsCriteria, repositoryId: string, project: string, skip: number, top: number, includeStatuses: boolean): Promise<GitCommitRef[]> {
        return Promise.resolve([]);
    }

    getDeletedRepositories(project: string): Promise<GitDeletedRepository[]> {
        return Promise.resolve([]);
    }

    getFileDiffs(fileDiffsCriteria: FileDiffsCriteria, project: string, repositoryId: string): Promise<FileDiff[]> {
        return Promise.resolve([]);
    }

    getForkSyncRequest(repositoryNameOrId: string, forkSyncOperationId: number, project: string, includeLinks: boolean): Promise<GitForkSyncRequest> {
        return Promise.resolve("getForkSyncRequest") as any;
    }

    getForkSyncRequests(repositoryNameOrId: string, project: string, includeAbandoned: boolean, includeLinks: boolean): Promise<GitForkSyncRequest[]> {
        return Promise.resolve([]);
    }

    getForks(repositoryNameOrId: string, collectionId: string, project: string, includeLinks: boolean): Promise<GitRepositoryRef[]> {
        return Promise.resolve([]);
    }

    getImportRequest(project: string, repositoryId: string, importRequestId: number): Promise<GitImportRequest> {
        return Promise.resolve("getImportRequest") as any;
    }

    getItem(repositoryId: string, path: string, project: string, scopePath: string, recursionLevel: VersionControlRecursionType, includeContentMetadata: boolean, latestProcessedChange: boolean, download: boolean, versionDescriptor: GitVersionDescriptor, includeContent: boolean, resolveLfs: boolean, sanitize: boolean): Promise<GitItem> {
        return Promise.resolve("getItem") as any;
    }

    getItemContent(repositoryId: string, path: string, project: string, scopePath: string, recursionLevel: VersionControlRecursionType, includeContentMetadata: boolean, latestProcessedChange: boolean, download: boolean, versionDescriptor: GitVersionDescriptor, includeContent: boolean, resolveLfs: boolean, sanitize: boolean): Promise<string> {
        return Promise.resolve("");
    }

    getItemText(repositoryId: string, path: string, project: string, scopePath: string, recursionLevel: VersionControlRecursionType, includeContentMetadata: boolean, latestProcessedChange: boolean, download: boolean, versionDescriptor: GitVersionDescriptor, includeContent: boolean, resolveLfs: boolean, sanitize: boolean): Promise<string> {
        return Promise.resolve("");
    }

    getItemZip(repositoryId: string, path: string, project: string, scopePath: string, recursionLevel: VersionControlRecursionType, includeContentMetadata: boolean, latestProcessedChange: boolean, download: boolean, versionDescriptor: GitVersionDescriptor, includeContent: boolean, resolveLfs: boolean, sanitize: boolean): Promise<string> {
        return Promise.resolve("");
    }

    getItems(repositoryId: string, project: string, scopePath: string, recursionLevel: VersionControlRecursionType, includeContentMetadata: boolean, latestProcessedChange: boolean, download: boolean, includeLinks: boolean, versionDescriptor: GitVersionDescriptor): Promise<GitItem[]> {
        return Promise.resolve([]);
    }

    getItemsBatch(requestData: GitItemRequestData, repositoryId: string, project: string): Promise<GitItem[][]> {
        return Promise.resolve([]);
    }

    getLikes(repositoryId: string, pullRequestId: number, threadId: number, commentId: number, project: string): Promise<IdentityRef[]> {
        return Promise.resolve([]);
    }

    getMergeBases(repositoryNameOrId: string, commitId: string, otherCommitId: string, project: string, otherCollectionId: string, otherRepositoryId: string): Promise<GitCommitRef[]> {
        return Promise.resolve([]);
    }

    getMergeRequest(project: string, repositoryNameOrId: string, mergeOperationId: number, includeLinks: boolean): Promise<GitMerge> {
        return Promise.resolve("getMergeRequest") as any;
    }

    getPullRequest(repositoryId: string, pullRequestId: number, project: string, maxCommentLength: number, skip: number, top: number, includeCommits: boolean, includeWorkItemRefs: boolean): Promise<GitPullRequest> {
        return Promise.resolve("getPullRequest") as any;
    }

    getPullRequestById(pullRequestId: number, project: string): Promise<GitPullRequest> {
        return Promise.resolve("getPullRequestById") as any;
    }

    getPullRequestCommits(repositoryId: string, pullRequestId: number, project: string): Promise<GitCommitRef[]> {
        return Promise.resolve([]);
    }

    getPullRequestConflict(repositoryId: string, pullRequestId: number, conflictId: number, project: string): Promise<GitConflict> {
        return Promise.resolve("getPullRequestConflict") as any;
    }

    getPullRequestConflicts(repositoryId: string, pullRequestId: number, project: string, skip: number, top: number, includeObsolete: boolean, excludeResolved: boolean, onlyResolved: boolean): Promise<GitConflict[]> {
        return Promise.resolve([]);
    }

    getPullRequestIteration(repositoryId: string, pullRequestId: number, iterationId: number, project: string): Promise<GitPullRequestIteration> {
        return Promise.resolve("getPullRequestIteration") as any;
    }

    getPullRequestIterationChanges(repositoryId: string, pullRequestId: number, iterationId: number, project: string, top: number, skip: number, compareTo: number): Promise<GitPullRequestIterationChanges> {
        return Promise.resolve("getPullRequestIterationChanges") as any;
    }

    getPullRequestIterationCommits(repositoryId: string, pullRequestId: number, iterationId: number, project: string, top: number, skip: number): Promise<GitCommitRef[]> {
        return Promise.resolve([]);
    }

    getPullRequestIterationStatus(repositoryId: string, pullRequestId: number, iterationId: number, statusId: number, project: string): Promise<GitPullRequestStatus> {
        return Promise.resolve("getPullRequestIterationStatus") as any;
    }

    getPullRequestIterationStatuses(repositoryId: string, pullRequestId: number, iterationId: number, project: string): Promise<GitPullRequestStatus[]> {
        return Promise.resolve([]);
    }

    getPullRequestIterations(repositoryId: string, pullRequestId: number, project: string, includeCommits: boolean): Promise<GitPullRequestIteration[]> {
        return Promise.resolve([]);
    }

    getPullRequestLabel(repositoryId: string, pullRequestId: number, labelIdOrName: string, project: string, projectId: string): Promise<WebApiTagDefinition> {
        return Promise.resolve("getPullRequestLabel") as any;
    }

    getPullRequestLabels(repositoryId: string, pullRequestId: number, project: string, projectId: string): Promise<WebApiTagDefinition[]> {
        return Promise.resolve([]);
    }

    getPullRequestProperties(repositoryId: string, pullRequestId: number, project: string): Promise<any> {
        return Promise.resolve("getPullRequestProperties") as any;
    }

    getPullRequestQuery(queries: GitPullRequestQuery, repositoryId: string, project: string): Promise<GitPullRequestQuery> {
        return Promise.resolve("getPullRequestQuery") as any;
    }

    getPullRequestReviewer(repositoryId: string, pullRequestId: number, reviewerId: string, project: string): Promise<IdentityRefWithVote> {
        return Promise.resolve("getPullRequestReviewer") as any;
    }

    getPullRequestReviewers(repositoryId: string, pullRequestId: number, project: string): Promise<IdentityRefWithVote[]> {
        return Promise.resolve([]);
    }

    getPullRequestStatus(repositoryId: string, pullRequestId: number, statusId: number, project: string): Promise<GitPullRequestStatus> {
        return Promise.resolve("getPullRequestStatus") as any;
    }

    getPullRequestStatuses(repositoryId: string, pullRequestId: number, project: string): Promise<GitPullRequestStatus[]> {
        return Promise.resolve([]);
    }

    getPullRequestThread(repositoryId: string, pullRequestId: number, threadId: number, project: string, iteration: number, baseIteration: number): Promise<GitPullRequestCommentThread> {
        return Promise.resolve("getPullRequestThread") as any;
    }

    getPullRequestWorkItemRefs(repositoryId: string, pullRequestId: number, project: string): Promise<ResourceRef[]> {
        return Promise.resolve([]);
    }

    getPullRequests(repositoryId: string, searchCriteria: GitPullRequestSearchCriteria, project: string, maxCommentLength: number, skip: number, top: number): Promise<GitPullRequest[]> {
        return Promise.resolve([]);
    }

    getPullRequestsByProject(project: string, searchCriteria: GitPullRequestSearchCriteria, maxCommentLength: number, skip: number, top: number): Promise<GitPullRequest[]> {
        return Promise.resolve([]);
    }

    getPush(repositoryId: string, pushId: number, project: string, includeCommits: number, includeRefUpdates: boolean): Promise<GitPush> {
        return Promise.resolve("getPush") as any;
    }

    getPushCommits(repositoryId: string, pushId: number, project: string, top: number, skip: number, includeLinks: boolean): Promise<GitCommitRef[]> {
        return Promise.resolve([]);
    }

    getPushes(repositoryId: string, project: string, skip: number, top: number, searchCriteria: GitPushSearchCriteria): Promise<GitPush[]> {
        return Promise.resolve([]);
    }

    getRecycleBinRepositories(project: string): Promise<GitDeletedRepository[]> {
        return Promise.resolve([]);
    }

    getRefFavorite(project: string, favoriteId: number): Promise<GitRefFavorite> {
        return Promise.resolve("getRefFavorite") as any;
    }

    getRefFavorites(project: string, repositoryId: string, identityId: string): Promise<GitRefFavorite[]> {
        return Promise.resolve([]);
    }

    getRefs(repositoryId: string, project: string, filter: string, includeLinks: boolean, includeStatuses: boolean, includeMyBranches: boolean, latestStatusesOnly: boolean, peelTags: boolean, filterContains: string): Promise<GitRef[]> {
        return Promise.resolve([]);
    }

    getRepositories(project: string, includeLinks: boolean, includeAllUrls: boolean, includeHidden: boolean): Promise<GitRepository[]> {
        return Promise.resolve([]);
    }

    getRepository(repositoryId: string, project: string): Promise<GitRepository> {
        return Promise.resolve("getRepository") as any;
    }

    getRepositoryWithParent(repositoryId: string, includeParent: boolean, project: string): Promise<GitRepository> {
        return Promise.resolve("getRepositoryWithParent") as any;
    }

    getRevert(project: string, revertId: number, repositoryId: string): Promise<GitRevert> {
        return Promise.resolve("getRevert") as any;
    }

    getRevertConflict(repositoryId: string, revertId: number, conflictId: number, project: string): Promise<GitConflict> {
        return Promise.resolve("getRevertConflict") as any;
    }

    getRevertConflicts(repositoryId: string, revertId: number, project: string, continuationToken: string, top: number, excludeResolved: boolean, onlyResolved: boolean, includeObsolete: boolean): Promise<GitConflict[]> {
        return Promise.resolve([]);
    }

    getRevertForRefName(project: string, repositoryId: string, refName: string): Promise<GitRevert> {
        return Promise.resolve("getRevertForRefName") as any;
    }

    getStatuses(commitId: string, repositoryId: string, project: string, top: number, skip: number, latestOnly: boolean): Promise<GitStatus[]> {
        return Promise.resolve([]);
    }

    getSuggestions(repositoryId: string, project: string): Promise<GitSuggestion[]> {
        return Promise.resolve([]);
    }

    getThreads(repositoryId: string, pullRequestId: number, project: string, iteration: number, baseIteration: number): Promise<GitPullRequestCommentThread[]> {
        return Promise.resolve([]);
    }

    getTree(repositoryId: string, sha1: string, project: string, projectId: string, recursive: boolean, fileName: string): Promise<GitTreeRef> {
        return Promise.resolve("getTree") as any;
    }

    getTreeZip(repositoryId: string, sha1: string, project: string, projectId: string, recursive: boolean, fileName: string): Promise<string> {
        return Promise.resolve("");
    }

    queryImportRequests(project: string, repositoryId: string, includeAbandoned: boolean): Promise<GitImportRequest[]> {
        return Promise.resolve([]);
    }

    restoreRepositoryFromRecycleBin(repositoryDetails: GitRecycleBinRepositoryDetails, project: string, repositoryId: string): Promise<GitRepository> {
        return Promise.resolve("restoreRepositoryFromRecycleBin") as any;
    }

    sharePullRequest(userMessage: ShareNotificationContext, repositoryId: string, pullRequestId: number, project: string): Promise<void> {
        return Promise.resolve("sharePullRequest") as any;
    }

    updateCherryPickConflict(conflict: GitConflict, repositoryId: string, cherryPickId: number, conflictId: number, project: string): Promise<GitConflict> {
        return Promise.resolve("updateCherryPickConflict") as any;
    }

    updateCherryPickConflicts(conflictUpdates: GitConflict[], repositoryId: string, cherryPickId: number, project: string): Promise<GitConflictUpdateResult[]> {
        return Promise.resolve([]);
    }

    updateComment(comment: Comment, repositoryId: string, pullRequestId: number, threadId: number, commentId: number, project: string): Promise<Comment> {
        return Promise.resolve("updateComment") as any;
    }

    updateImportRequest(importRequestToUpdate: GitImportRequest, project: string, repositoryId: string, importRequestId: number): Promise<GitImportRequest> {
        return Promise.resolve("updateImportRequest") as any;
    }

    updatePullRequest(gitPullRequestToUpdate: GitPullRequest, repositoryId: string, pullRequestId: number, project: string): Promise<GitPullRequest> {
        return Promise.resolve("updatePullRequest") as any;
    }

    updatePullRequestConflict(conflict: GitConflict, repositoryId: string, pullRequestId: number, conflictId: number, project: string): Promise<GitConflict> {
        return Promise.resolve("updatePullRequestConflict") as any;
    }

    updatePullRequestConflicts(conflictUpdates: GitConflict[], repositoryId: string, pullRequestId: number, project: string): Promise<GitConflictUpdateResult[]> {
        return Promise.resolve([]);
    }

    updatePullRequestIterationStatuses(customHeaders: any, patchDocument: JsonPatchDocument, repositoryId: string, pullRequestId: number, iterationId: number, project: string): Promise<void> {
        return Promise.resolve("updatePullRequestIterationStatuses") as any;
    }

    updatePullRequestProperties(customHeaders: any, patchDocument: JsonPatchDocument, repositoryId: string, pullRequestId: number, project: string): Promise<any> {
        return Promise.resolve("updatePullRequestProperties") as any;
    }

    updatePullRequestReviewer(reviewer: IdentityRefWithVote, repositoryId: string, pullRequestId: number, reviewerId: string, project: string): Promise<IdentityRefWithVote> {
        return Promise.resolve("updatePullRequestReviewer") as any;
    }

    updatePullRequestReviewers(patchVotes: IdentityRefWithVote[], repositoryId: string, pullRequestId: number, project: string): Promise<void> {
        return Promise.resolve("updatePullRequestReviewers") as any;
    }

    updatePullRequestStatuses(customHeaders: any, patchDocument: JsonPatchDocument, repositoryId: string, pullRequestId: number, project: string): Promise<void> {
        return Promise.resolve("updatePullRequestStatuses") as any;
    }

    updateRef(newRefInfo: GitRefUpdate, repositoryId: string, filter: string, project: string, projectId: string): Promise<GitRef> {
        return Promise.resolve("updateRef") as any;
    }

    updateRefs(refUpdates: GitRefUpdate[], repositoryId: string, project: string, projectId: string): Promise<GitRefUpdateResult[]> {
        return Promise.resolve([]);
    }

    updateRepository(newRepositoryInfo: GitRepository, repositoryId: string, project: string): Promise<GitRepository> {
        return Promise.resolve("updateRepository") as any;
    }

    updateRevertConflict(conflict: GitConflict, repositoryId: string, revertId: number, conflictId: number, project: string): Promise<GitConflict> {
        return Promise.resolve("updateRevertConflict") as any;
    }

    updateRevertConflicts(conflictUpdates: GitConflict[], repositoryId: string, revertId: number, project: string): Promise<GitConflictUpdateResult[]> {
        return Promise.resolve([]);
    }

    updateThread(commentThread: GitPullRequestCommentThread, repositoryId: string, pullRequestId: number, threadId: number, project: string): Promise<GitPullRequestCommentThread> {
        return Promise.resolve("updateThread") as any;
    }

}