// @flow
import React from 'react';
import type { GradingShapeType, ReviewType } from 'common/types';
import styles from './style.less';
import Bootstrap from 'common/components/bootstrap/bootstrap';
import ReviewListItem from 'common/components/review-list-item/review-list-item';

type Props = {
  shape: GradingShapeType,
  size: number,
  canVote: boolean,
  canReport: boolean
}

class ReviewPreview extends React.PureComponent<Props> {
  static displayName = 'ReviewPreview';

  render() {
    const { shape, size, canVote, canReport } = this.props;
    const grades = {};
    grades[1] = 5;
    grades[2] = 3;
    const review: ReviewType = {
      id: 1,
      authorType: 'customer',
      authorId: 1,
      productId: 1,
      product: null,
      customer: null,
      displayName: 'John Doe',
      email: '',
      title: 'Amazing product!',
      content: "I have bough this product and it rocks!\nIf only the shipping was cheaper...",
      grades,
      reply: null,
      date: new Date(),
      underReview: false,
      deleted: false,
      canVote: canVote,
      canReport: canReport,
      canDelete: false,
      canEdit: false
    };

    return (
      <Bootstrap key={size} className={styles.preview}>
        <div id="revws-tab-content">
          <ReviewListItem
            shape={shape}
            shapeSize={size}
            review={review}
          />
        </div>
      </Bootstrap>
    );
  }
}

export default ReviewPreview;