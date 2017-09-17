import React from 'react';
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const aTitleStyle = {
  color: '#000000',
  textDecoration: 'none',
  hover: {
    color: '#000000',
    textDecoration: 'none',
    cursor: 'pointer'
  }
}
const aCardStyle = {
  marginBottom: '2%',
  display: 'block',
  float: 'none',
}
const cardBodyStyle = {
  backgroundColor: '#E9F7EF',
  padding: '3%',
  textAlign: 'left',
  width: '50%',
  marginLeft: '3%',
  display: 'inline-block',
}
const cardHeaderStyle = {
  backgroundColor: '#E9F7EF',
  padding: '3%',
  width: '20%',
  textAlign: 'left',
  marginRight: '3%',
  display: 'inline-block',
  height: '100%',
}
const aTagStyle = {
  backgroundColor: '#23b567',
  color: 'white',
  borderRadius: '5px',
}
const aLinkStyle = {
  color: '#23b567'
}

export default ({username, avatarUrl, title, url}) => (
  <Card style={aCardStyle}>
    <CardHeader
      style={cardHeaderStyle}
      title={username}
      subtitle="❤️s JS"
      avatar={avatarUrl}
    />
    <div style={cardBodyStyle}>
      <CardTitle title={<a style={aTitleStyle} href={url}>{title}</a>} />
      <CardActions>
        <FlatButton label="Action1" style={aTagStyle}/>
        <FlatButton label="Action2" style={aTagStyle}/>
      </CardActions>
    </div>

  </Card>
);
