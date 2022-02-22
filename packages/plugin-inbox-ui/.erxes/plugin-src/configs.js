module.exports = {
  name: "inbox",
  port: 3009,
  exposes: {
    "./routes": "./src/routes.tsx",
    "./settings": "./src/Settings.tsx",
  },
  routes: {
    url: "http://localhost:3009/remoteEntry.js",
    scope: "inbox",
    module: "./routes",
  },
  menus: [
    {
      text: "Team Inbox",
      url: "/inbox",
      icon: "icon-chat",
      location: "mainNavigation",
      permission: "showConversations",
    },
    {
      text: "Bookings",
      url: "/bookings",
      icon: "icon-paste",
      location: "mainNavigation",
      permission: "showIntegrations",
    },
    {
      text: "Forms",
      url: "/forms",
      icon: "icon-laptop",
      location: "mainNavigation",
      permission: "showForms",
    },
    {
      text: "Skills",
      to: "/settings/skills",
      image: "/images/icons/erxes-29.png",
      location: "settings",
      scope: "inbox",
      component: "./settings",
      permissions: [
        "getSkillTypes",
        "getSkill",
        "getSkills",
        "manageSkills",
        "manageSkillTypes",
      ],
    },
    {
      text: "Channels",
      to: "/settings/channels",
      image: "/images/icons/erxes-05.svg",
      location: "settings",
      scope: "inbox",
      component: "./settings",
      permissions: ["showChannels", "manageChannels"],
    },
    {
      text: "Integrations",
      to: "/settings/integrations",
      image: "/images/icons/erxes-04.svg",
      location: "settings",
      scope: "inbox",
      component: "./settings",
      permissions: [
        "showIntegrations",
        "integrationsCreateMessengerIntegration",
        "integrationsEditMessengerIntegration",
        "integrationsSaveMessengerAppearanceData",
        "integrationsSaveMessengerConfigs",
        "integrationsCreateLeadIntegration",
        "integrationsEditLeadIntegration",
        "integrationsRemove",
        "integrationsArchive",
        "integrationsEdit",
      ],
    },
    {
      text: "Responses",
      to: "/settings/response-templates",
      image: "/images/icons/erxes-10.svg",
      location: "settings",
      scope: "inbox",
      component: "./settings",
      permissions: ["manageResponseTemplate", "showResponseTemplates"],
    },
  ],
};
