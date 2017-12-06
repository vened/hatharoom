const crudResources = [
  {
    resource: 'Post',
    path: '/posts',
    label: 'Публикации',
    columns: [
      {
        title: 'Заголовок',
        dataIndex: 'title',
        key: 'title',
        type: 'string',
      },
      {
        title: 'Описание',
        dataIndex: 'description',
        key: 'description',
        type: 'text',
      },
    ],
  },
];

export default crudResources;