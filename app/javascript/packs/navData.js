const navData = [
  {
    label: 'Dashboard',
    path: '/admin',
    faIcon: 'tachometer',
  },
  {
    label: 'Пользователи',
    path: '/admin/users',
    faIcon: 'users',
  },
  {
    label: 'UI elements',
    path: '/admin/ui',
    faIcon: 'desktop',
    children: [
      {
        label: 'Avatar',
        path: '/admin/ui/avatar',
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
