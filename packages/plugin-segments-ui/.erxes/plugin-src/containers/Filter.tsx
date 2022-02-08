import gql from 'graphql-tag';
import * as compose from 'lodash.flowright';
import { IRouterProps } from '@erxes/ui/src/types';
import { router, withProps } from '@erxes/ui/src/utils';
import React from 'react';
import { graphql } from 'react-apollo';
import { withRouter } from 'react-router-dom';
import Filter from '@erxes/ui-segments/src/components/SidebarFilter';
import { queries } from '@erxes/ui-segments/src/graphql';
import { Counts, SegmentsQueryResponse } from '@erxes/ui-segments/src/types';

type Props = {
  contentType: string;
  boardId?: string;
  pipelineId?: string;
  counts: Counts;
};

type FinalProps = {
  segmentsQuery: SegmentsQueryResponse;
} & Props &
  IRouterProps;

const FilterContainer = (props: FinalProps) => {
  const { segmentsQuery, history } = props;

  const currentSegment = router.getParam(history, 'segment');

  const setSegment = segment => {
    router.setParams(history, { segment });
    router.removeParams(history, 'page');
  };

  const removeSegment = () => {
    router.removeParams(history, 'segment');
  };

  const extendedProps = {
    ...props,
    currentSegment,
    setSegment,
    removeSegment,
    segments: segmentsQuery.segments || [],
    loading: segmentsQuery.loading
  };

  return <Filter {...extendedProps} />;
};

export default withProps<Props>(
  compose(
    graphql(gql(queries.segments), {
      name: 'segmentsQuery',
      options: ({ contentType, boardId, pipelineId }: Props) => ({
        variables: { contentTypes: [contentType], boardId, pipelineId }
      })
    })
  )(withRouter<FinalProps>(FilterContainer))
);