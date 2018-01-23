// @flow

import React from 'react';
import type { ComponentType } from 'react';
import Button from 'material-ui/Button';
import Dialog, { DialogActions, DialogContent, withMobileDialog } from 'material-ui/Dialog';
import Question from 'material-ui-icons/HelpOutline';
import styles from './confirm-delete.less';

type InputProps<T> = {
  type: string,
  payload: ?T,
  onConfirm: (T)=>void,
  onClose: ()=>void
}

type Props<T> = InputProps<T> & {
  fullScreen: boolean
}

class DeleteReviewConfirm<T> extends React.PureComponent<Props<T>> {
  static displayName = 'DeleteReviewConfirm';

  render() {
    const { onClose, payload, fullScreen, type } = this.props;
    return (
      <Dialog
        fullScreen={fullScreen}
        fullWidth={true}
        maxWidth='md'
        open={!! payload}
        onClose={onClose} >
        <DialogContent>
          <div className={styles.single}>
            <h2>Are you sure you want to delete this { type }?</h2>
            <Question style={{width: 120, height: 120}} color='error' />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={this.onDelete} color="accent">
            Delete { type }
          </Button>
        </DialogActions>
      </Dialog>
    );
  }

  onDelete = () => {
    const { onConfirm, payload } = this.props;
    if (payload) {
      onConfirm(payload);
    }
  }
}

const makeResponsive = withMobileDialog({
  breakpoint: 'xs'
});

const Responsive: ComponentType<InputProps<number>> = makeResponsive(DeleteReviewConfirm);

export default Responsive;