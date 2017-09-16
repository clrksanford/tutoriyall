import React from 'react';
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const aTagStyle = {
  color: '#0060B6',
  textDecoration: 'none',
  hover: {
    color: '#00A0C6',
    textDecoration: 'none',
    cursor: 'pointer'
  }
}

export default ({collector, avatarUrl, title, url}) => (
  <Card>
    <CardHeader
      title={collector}
      subtitle="❤️s JS"
      avatar={avatarUrl}
    />
    <CardTitle title={<a style={aTagStyle} href={url}>{title}</a>} />
    <CardActions>
      <FlatButton label="Action1" />
      <FlatButton label="Action2" />
    </CardActions>
  </Card>
);
