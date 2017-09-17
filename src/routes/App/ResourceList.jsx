import React from 'react';
import Resource from './Resource';

export default ({ resources }) => (
  <div>
    {resources.map((r, index) => (
      <Resource key={index}
        title={r.title}
        url={r.url}
        description={r.description}
        username='clrksanford'
        avatarUrl="https://avatars3.githubusercontent.com/u/20669604?v=4"
      />
    ))}
  </div>
);
