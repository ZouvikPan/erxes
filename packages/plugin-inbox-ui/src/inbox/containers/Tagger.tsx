import TaggerPopover from '@erxes/ui/src/tags/components/TaggerPopover';
import React from 'react';
import { refetchSidebarConversationsOptions } from '../utils';
import { InboxManagementActionConsumer } from './InboxCore';

const Tagger = props => {
  const { refetchQueries } = refetchSidebarConversationsOptions();

  return (
    <InboxManagementActionConsumer>
      {({ notifyConsumersOfManagementAction }) => (
        <TaggerPopover
          {...props}
          type='conversation'
          refetchQueries={refetchQueries}
          successCallback={notifyConsumersOfManagementAction}
        />
      )}
    </InboxManagementActionConsumer>
  );
};

export default Tagger;
