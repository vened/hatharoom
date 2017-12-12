const crudResources = [
  {
    resource: 'User',
    path: '/admin/users',
    apiPath: '/api/v1/users',
    label: 'Пользователи',
    faIcon: 'user',
    columns: [
      {
        title: 'id',
        dataIndex: 'id',
        key: 'id',
        type: 'string',
      },
      {
        title: 'email',
        dataIndex: 'email',
        key: 'email',
        type: 'string',
      },
      {
        title: 'role',
        dataIndex: 'role',
        key: 'role',
        type: 'string',
      },
    ],
  },
  {
    resource: 'Page',
    path: '/admin/pages',
    apiPath: '/api/v1/pages',
    label: 'Страницы',
    labelAdd: 'Новая страница',
    faIcon: 'book',
    pagination: {
      pageSize: 2,
      current: 1,
    },
    columns: [
      {
        title: 'id',
        dataIndex: 'id',
        key: 'id',
        type: 'string',
      },
      {
        title: 'title',
        label: 'Заголовок',
        dataIndex: 'title',
        key: 'title',
        type: 'string',
        required: true,
        requiredMessage: 'Укажите заголовок',
      },
      {
        title: 'body',
        label: 'Текст',
        dataIndex: 'body',
        key: 'body',
        type: 'text',
      },
      {
        title: 'publish',
        label: 'Опубликовано?',
        dataIndex: 'publish',
        key: 'publish',
        type: 'switch',
      },
    ],
  },
];

export default crudResources;