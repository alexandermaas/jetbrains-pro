import * as TfsCoreInterfaces from "./CoreInterfaces";
import * as VSSInterfaces from "./common/VSSInterfaces";
export interface AssociatedWorkItem {}
export interface AsyncGitOperationNotification {}
export interface AsyncRefOperationCommitLevelEventNotification extends AsyncGitOperationNotification {}
export interface AsyncRefOperationCompletedNotification extends AsyncGitOperationNotification {}
export interface AsyncRefOperationConflictNotification extends AsyncRefOperationCommitLevelEventNotification {}
export interface AsyncRefOperationGeneralFailureNotification extends AsyncGitOperationNotification {}
export interface AsyncRefOperationProgressNotification extends AsyncRefOperationCommitLevelEventNotification {}
export interface AsyncRefOperationTimeoutNotification extends AsyncGitOperationNotification {}
export interface Attachment {}
export interface AutoCompleteUpdatedEvent extends RealTimePullRequestEvent {}
export interface BranchUpdatedEvent extends RealTimePullRequestEvent {}
export interface Change<T> {}
export interface ChangeCountDictionary {}
export interface ChangeList<T> {}
export interface ChangeListSearchCriteria {}
export interface CheckinNote {}
export interface Comment {}
export interface CommentIterationContext {}
export interface CommentPosition {}
export interface CommentThread {}
export interface CommentThreadContext {}
export declare enum CommentThreadStatus {}
export interface CommentTrackingCriteria {}
export declare enum CommentType {}
export interface CompletionErrorsEvent extends RealTimePullRequestEvent {}
export interface DiscussionsUpdatedEvent extends RealTimePullRequestEvent {}
export interface FileContentMetadata {}
export interface FileDiff {}
export interface FileDiffParams {}
export interface FileDiffsCriteria {}
export interface GitAnnotatedTag {}
export declare enum GitAsyncOperationStatus {}
export interface GitAsyncRefOperation {}
export interface GitAsyncRefOperationDetail {}
export declare enum GitAsyncRefOperationFailureStatus {}
export interface GitAsyncRefOperationParameters {}
export interface GitAsyncRefOperationSource {}
export interface GitBaseVersionDescriptor extends GitVersionDescriptor {}
export interface GitBlobRef {}
export interface GitBranchStats {}
export interface GitChange extends Change<GitItem> {}
export interface GitCherryPick extends GitAsyncRefOperation {}
export interface GitCommit extends GitCommitRef {}
export interface GitCommitChanges {}
export interface GitCommitDiffs {}
export interface GitCommitRef {}
export interface GitCommitToCreate {}
export interface GitConflict {}
export interface GitConflictAddAdd extends GitConflict {}
export interface GitConflictAddRename extends GitConflict {}
export interface GitConflictDeleteEdit extends GitConflict {}
export interface GitConflictDeleteRename extends GitConflict {}
export interface GitConflictDirectoryFile extends GitConflict {}
export interface GitConflictEditDelete extends GitConflict {}
export interface GitConflictEditEdit extends GitConflict {}
export interface GitConflictFileDirectory extends GitConflict {}
export interface GitConflictRename1to2 extends GitConflict {}
export interface GitConflictRename2to1 extends GitConflict {}
export interface GitConflictRenameAdd extends GitConflict {}
export interface GitConflictRenameDelete extends GitConflict {}
export interface GitConflictRenameRename extends GitConflict {}
export declare enum GitConflictType {}
export interface GitConflictUpdateResult {}
export declare enum GitConflictUpdateStatus {}
export interface GitDeletedRepository {}
export interface GitFilePathsCollection {}
export interface GitForkOperationStatusDetail {}
export interface GitForkRef extends GitRef {}
export interface GitForkSyncRequest {}
export interface GitForkSyncRequestParameters {}
export interface GitForkTeamProjectReference extends TfsCoreInterfaces.TeamProjectReference {}
export declare enum GitHistoryMode {}
export interface GitImportFailedEvent {}
export interface GitImportGitSource {}
export interface GitImportRequest {}
export interface GitImportRequestParameters {}
export interface GitImportStatusDetail {}
export interface GitImportSucceededEvent {}
export interface GitImportTfvcSource {}
export interface GitItem extends ItemModel {}
export interface GitItemDescriptor {}
export interface GitItemRequestData {}
export interface GitLastChangeItem {}
export interface GitLastChangeTreeItems {}
export interface GitMerge extends GitMergeParameters {}
export interface GitMergeOperationStatusDetail {}
export interface GitMergeOriginRef {}
export interface GitMergeParameters {}
export interface GitObject {}
export declare enum GitObjectType {}
export interface GitPathAction {}
export declare enum GitPathActions {}
export interface GitPathToItemsCollection {}
export interface GitPolicyConfigurationResponse {}
export interface GitPullRequest {}
export interface GitPullRequestChange extends GitChange {}
export interface GitPullRequestCommentThread extends CommentThread {}
export interface GitPullRequestCommentThreadContext {}
export interface GitPullRequestCompletionOptions {}
export interface GitPullRequestIteration {}
export interface GitPullRequestIterationChanges {}
export interface GitPullRequestMergeOptions {}
export declare enum GitPullRequestMergeStrategy {}
export interface GitPullRequestQuery {}
export interface GitPullRequestQueryInput {}
export declare enum GitPullRequestQueryType {}
export interface GitPullRequestReviewFileContentInfo {}
export declare enum GitPullRequestReviewFileType {}
export interface GitPullRequestSearchCriteria {}
export interface GitPullRequestStatus extends GitStatus {}
export interface GitPush extends GitPushRef {}
export interface GitPushEventData {}
export interface GitPushRef {}
export interface GitPushSearchCriteria {}
export interface GitQueryBranchStatsCriteria {}
export interface GitQueryCommitsCriteria {}
export interface GitQueryRefsCriteria {}
export interface GitRecycleBinRepositoryDetails {}
export interface GitRef {}
export interface GitRefFavorite {}
export declare enum GitRefSearchType {}
export interface GitRefUpdate {}
export declare enum GitRefUpdateMode {}
export interface GitRefUpdateResult {}
export declare enum GitRefUpdateStatus {}
export interface GitRepository {}
export interface GitRepositoryCreateOptions {}
export interface GitRepositoryRef {}
export interface GitRepositoryStats {}
export interface GitResolution {}
export declare enum GitResolutionError {}
export interface GitResolutionMergeContent extends GitResolution {}
export declare enum GitResolutionMergeType {}
export interface GitResolutionPathConflict extends GitResolution {}
export declare enum GitResolutionPathConflictAction {}
export interface GitResolutionPickOneAction extends GitResolution {}
export interface GitResolutionRename1to2 extends GitResolutionMergeContent {}
export declare enum GitResolutionRename1to2Action {}
export declare enum GitResolutionStatus {}
export declare enum GitResolutionWhichAction {}
export interface GitRevert extends GitAsyncRefOperation {}
export interface GitStatus {}
export interface GitStatusContext {}
export declare enum GitStatusState {}
export interface GitSuggestion {}
export interface GitTargetVersionDescriptor extends GitVersionDescriptor {}
export interface GitTemplate {}
export interface GitTreeDiff {}
export interface GitTreeDiffEntry {}
export interface GitTreeDiffResponse {}
export interface GitTreeEntryRef {}
export interface GitTreeRef {}
export interface GitUserDate {}
export interface GitVersionDescriptor {}
export declare enum GitVersionOptions {}
export declare enum GitVersionType {}
export interface GlobalGitRepositoryKey {}
export interface HistoryEntry<T> {}
export interface IdentityRefWithVote extends VSSInterfaces.IdentityRef {}
export interface ImportRepositoryValidation {}
export interface IncludedGitCommit {}
export interface IsDraftUpdatedEvent extends RealTimePullRequestEvent {}
export interface ItemContent {}
export declare enum ItemContentType {}
export interface ItemDetailsOptions {}
export interface ItemModel {}
export declare enum IterationReason {}
export interface LabelsUpdatedEvent extends RealTimePullRequestEvent {}
export interface LineDiffBlock {}
export declare enum LineDiffBlockChangeType {}
export interface MergeCompletedEvent extends RealTimePullRequestEvent {}
export interface PolicyEvaluationUpdatedEvent extends RealTimePullRequestEvent {}
export declare enum PullRequestAsyncStatus {}
export interface PullRequestCreatedEvent extends RealTimePullRequestEvent {}
export declare enum PullRequestMergeFailureType {}
export declare enum PullRequestStatus {}
export interface PullRequestTabExtensionConfig {}
export interface RealTimePullRequestEvent {}
export declare enum RefFavoriteType {}
export interface RetargetEvent extends RealTimePullRequestEvent {}
export interface ReviewersUpdatedEvent extends RealTimePullRequestEvent {}
export interface ReviewersVotesResetEvent extends RealTimePullRequestEvent {}
export interface ReviewerVoteUpdatedEvent extends RealTimePullRequestEvent {}
export interface ShareNotificationContext {}
export interface SourceToTargetRef {}
export interface StatusAddedEvent extends RealTimePullRequestEvent {}
export interface StatusesDeletedEvent extends RealTimePullRequestEvent {}
export interface StatusUpdatedEvent extends RealTimePullRequestEvent {}
export interface SupportedIde {}
export declare enum SupportedIdeType {}
export interface TfvcBranch extends TfvcBranchRef {}
export interface TfvcBranchMapping {}
export interface TfvcBranchRef extends TfvcShallowBranchRef {}
export interface TfvcChange extends Change<TfvcItem> {}
export interface TfvcChangeset extends TfvcChangesetRef {}
export interface TfvcChangesetRef {}
export interface TfvcChangesetSearchCriteria {}
export interface TfvcChangesetsRequestData {}
export interface TfvcCheckinEventData {}
export interface TfvcHistoryEntry extends HistoryEntry<TfvcItem> {}
export interface TfvcItem extends ItemModel {}
export interface TfvcItemDescriptor {}
export interface TfvcItemPreviousHash extends TfvcItem {}
export interface TfvcItemRequestData {}
export interface TfvcLabel extends TfvcLabelRef {}
export interface TfvcLabelRef {}
export interface TfvcLabelRequestData {}
export interface TfvcMappingFilter {}
export interface TfvcMergeSource {}
export interface TfvcPolicyFailureInfo {}
export interface TfvcPolicyOverrideInfo {}
export interface TfvcShallowBranchRef {}
export interface TfvcShelveset extends TfvcShelvesetRef {}
export interface TfvcShelvesetRef {}
export interface TfvcShelvesetRequestData {}
export interface TfvcStatistics {}
export interface TfvcVersionDescriptor {}
export declare enum TfvcVersionOption {}
export declare enum TfvcVersionType {}
export interface TitleDescriptionUpdatedEvent extends RealTimePullRequestEvent {}
export interface UpdateRefsRequest {}
export declare enum VersionControlChangeType {}
export interface VersionControlProjectInfo {}
export declare enum VersionControlRecursionType {}
export declare var TypeInfo: {};
