import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { FacebookMessage } from 'modules/inbox/containers/conversationDetail';
import { FacebookComment } from './';

const propTypes = {
  conversation: PropTypes.object,
  scrollBottom: PropTypes.func.isRequired,
  conversationMessages: PropTypes.array
};

const getAttr = (message, attr) => {
  if (!message.facebookData) {
    return;
  }

  return message.facebookData[attr];
};

export default class FacebookConversation extends Component {
  renderReplies(comment) {
    const { conversationMessages = [] } = this.props;

    const replies = conversationMessages.filter(msg =>
      getAttr(msg, 'parentId')
    );

    return replies.map(reply => (
      <Fragment key={reply._id}>
        <FacebookComment message={reply} />
      </Fragment>
    ));
  }

  renderComments(post) {
    const { conversationMessages = [] } = this.props;

    const comments = conversationMessages.filter(
      msg => !getAttr(msg, 'isPost') && !getAttr(msg, 'parentId')
    );

    return comments.map(comment => (
      <Fragment key={comment._id}>
        <FacebookComment message={comment} />

        {this.renderReplies(comment)}
      </Fragment>
    ));
  }

  render() {
    const { conversation, conversationMessages = [] } = this.props;

    if (!conversation) {
      return null;
    }

    const post = conversationMessages.find(
      message => message.facebookData.isPost
    );

    if (!post) {
      return null;
    }

    return (
      <Fragment>
        <FacebookMessage message={post} />
        {this.renderComments(post)}
      </Fragment>
    );
  }
}

FacebookConversation.propTypes = propTypes;
