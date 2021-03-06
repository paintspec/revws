// @flow

import type { ReviewType, ListOrder, ListOrderDirection } from 'common/types';
import type { ListConditions, ListType, EntitiesType } from 'front/types';
import type {
  CloseEditReviewAction,
  SaveReviewAction,
  UpdateReviewDetailsAction,
  SaveReviewCompletedAction,
  SetSnackbarAction,
  DeleteReviewAction,
  CloseDeleteReviewAction,
  TriggerDeleteReviewAction,
  TriggerCreateReviewAction,
  TriggerEditReviewAction,
  SetReviewAction,
  TriggerVoteAction,
  TriggerReportReviewAction,
  ReviewRemovedAction,
  LoadListAction,
  LoadListFailedAction,
  SetListAction,
  SetReviewsAction,
  AgreeGDPRAction,
  MergeEntitiesAction
} from './index';
import Types from './types';

export const setSnackbar = (message: ?string): SetSnackbarAction => ({ type: Types.setSnackbar, message });

export const triggerCreateReview = (productId: number): TriggerCreateReviewAction => ({ type: Types.triggerCreateReview, productId });
export const triggerEditReview = (review: ReviewType): TriggerEditReviewAction => ({ type: Types.triggerEditReview, review });
export const triggerVoteReview = (review: ReviewType, direction: 'up' | 'down'): TriggerVoteAction => ({ type: Types.triggerVote, review, direction });
export const triggerReportReview = (review: ReviewType): TriggerReportReviewAction => ({ type: Types.triggerReportReview, review });
export const closeEditReview = (): CloseEditReviewAction => ({ type: Types.closeEditReview });
export const saveReview = (review: ReviewType): SaveReviewAction => ({ type: Types.saveReview, review });
export const saveReviewCompleted = (saved: boolean): SaveReviewCompletedAction => ({ type: Types.saveReviewCompleted, saved });
export const updateReviewDetails = (review: ReviewType): UpdateReviewDetailsAction => ({ type: Types.updateReviewDetails, review });
export const setReview = (review: ReviewType): SetReviewAction => ({ type: Types.setReview, review });

export const triggerDeleteReview = (review: ReviewType): TriggerDeleteReviewAction => ({ type: Types.triggerDeleteReview, review });
export const deleteReview = (review: ReviewType): DeleteReviewAction => ({ type: Types.deleteReview, review });
export const closeDeleteReview = (): CloseDeleteReviewAction => ({ type: Types.closeDeleteReview });
export const reviewRemoved = (review: ReviewType): ReviewRemovedAction => ({ type: Types.reviewRemoved, review });

export const loadList = (listId: string, conditions: ListConditions, page: number, pageSize: number, order: ListOrder, orderDir: ListOrderDirection): LoadListAction => ({ type: Types.loadList, listId, conditions, page, pageSize, order, orderDir });
export const loadListFailed = (listId: string): LoadListFailedAction => ({ type: Types.loadListFailed, listId });
export const setList = (list: ListType): SetListAction => ({ type: Types.setList, list });
export const setReviews = (reviews: Array<ReviewType>): SetReviewsAction => ({ type: Types.setReviews, reviews });
export const mergeEntities = (entities: EntitiesType): MergeEntitiesAction => ({ type: Types.mergeEntities, entities });

export const agreeGDPR = (agreed: boolean): AgreeGDPRAction => ({ type: Types.agreeGDPR, agreed });
