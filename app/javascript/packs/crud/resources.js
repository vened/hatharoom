const crudResources = [
  {
    resource: 'User',
    path: '/admin/users',
    apiPath: '/api/v1/users',
    label: 'Пользователи',
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
];

export default crudResources;