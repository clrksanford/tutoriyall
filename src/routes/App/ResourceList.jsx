import React from 'react';
import Resource from './Resource';

export default ({resources}) => (
  <div>
    {
      resources.map(r => <Resource {...r} />)
    }
  </div>
)
