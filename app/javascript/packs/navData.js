const navData = [
  {
    label: 'Dashboard',
    path: '',
    faIcon: 'tachometer',
  },
  {
    label: 'Пользователи',
    path: '/users',
    faIcon: 'users',
  },
  {
    label: 'UI elements',
    path: '/ui',
    faIcon: 'desktop',
    children: [
      {
        label: 'Avatar',
        path: '/ui/avatar',
      },
      {
        label: 'Badge',
        path: '/ui/badge',
      },
      {
        label: 'Buttons',
        path: '/ui/buttons',
      },
      {
        label: 'Calendar',
        path: '/ui/calendar',
      },
      {
        label: 'Card',
        path: '/ui/card',
      },
      {
        label: 'Carousel',
        path: '/ui/carousel',
      },
      {
        label: 'Collapse',
        path: '/ui/collapse',
      },
      {
        label: 'Popover',
        path: '/ui/popover',
      },
      {
        label: 'Tooltip',
        path: '/ui/tooltip',
      },

      {
        label: 'General',
        path: '/ui/general',
      },
      {
        label: 'Components',
        path: '/ui/components',
      },
      {
        label: 'Base',
        path: '/ui',
      },
    ],
  },
];

export default navData;
