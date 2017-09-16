import React from 'react';
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Chip from 'material-ui/Chip';

const styles = {
  a: {
    color: '#0060B6',
    textDecoration: 'none',
    textAlign: "left",
    hover: {
      color: '#00A0C6',
      textDecoration: 'none',
      cursor: 'pointer'
    }
  },
  chip: {
    margin: 4,
  }
}

export default ({username, avatarUrl, title, url, tags}) => (
  <Card>
    <CardHeader
      style={{textAlign: "left"}}
      title={username}
      subtitle="JS Lover"
      avatar={avatarUrl}
    />
    <CardTitle title={<a style={styles.a} href={url}>{title}</a>} />
    <CardActions>
      <FlatButton label="Add" />
    </CardActions>
    {
      tags.map(t => (
        <Chip style={styles.chip}>
          {t}
        </Chip>
      ))
    }
  </Card>
);
