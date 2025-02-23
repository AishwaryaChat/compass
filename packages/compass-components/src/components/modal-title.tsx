import React from 'react';
import { spacing } from '@leafygreen-ui/tokens';
import { css, cx } from '@leafygreen-ui/emotion';

import { H3 } from './leafygreen';

const modalTitleStyles = css({
  marginBottom: spacing[4],
});

function ModalTitle(
  props: Omit<React.ComponentProps<typeof H3>, 'as'>
): React.ReactElement {
  return <H3 {...props} className={cx(modalTitleStyles, props.className)} />;
}

export { ModalTitle };
