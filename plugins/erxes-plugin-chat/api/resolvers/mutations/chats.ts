import { graphqlPubsub } from '../subscriptions/pubsub';

const chatMutations = [
  {
    name: 'chatAdd',
    handler: async (_root, { participantIds, ...doc }, { user, checkPermission, models }) => {
      await checkPermission('manageChats', user)
      return models.Chats.createChat(
        models,
        { ...doc, participantIds: (participantIds || []).concat(user._id) },
        user._id
      );
    }
  },
  {
    name: 'chatEdit',
    handler: async (_root, { _id, ...doc }, { models, checkPermission, user }) => {
      await checkPermission('manageChats', user)
      return models.Chats.updateChat(models, _id, doc);
    }
  },
  {
    name: 'chatRemove',
    handler: async (_root, { _id }, { models, checkPermission, user }) => {
      await checkPermission('manageChats', user)
      return models.Chats.removeChat(models, _id);
    }
  },
  {
    name: 'chatMessageAdd',
    handler: async (_root, args, { models, checkPermission, user }) => {
      await checkPermission('manageChats', user)
      if (!args.content) {
        throw new Error('Content is required');
      }

      const created = await models.ChatMessages.createChatMessage(
        models,
        args,
        user._id
      );

      graphqlPubsub.publish('chatMessageInserted', {
        chatMessageInserted: created
      });

      return created;
    }
  },
  {
    name: 'chatMessageRemove',
    handler: (_root, { _id }, { models }) => {
      return models.ChatMessages.removeChatMessage(models, _id);
    }
  },
  {
    name: 'chatAddOrRemoveMember',
    handler: async (_root, { _id, userIds, type }, { models, user, checkPermission }) => 
    {
      checkPermission('manageChats', user)
      await models.Chats.updateOne(
        { _id },
        type === 'add'
          ? { $addToSet: { participantIds: userIds } }
          : { $pull: { participantIds: { $in: userIds } } }
      );

      return 'Success';
    }
  }
];

export default chatMutations;