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
  marginBottom: '3%',
  display: 'block',
  boxShadow: 'none',
}
const cardBodyStyle = {
  backgroundColor: '#E9F7EF',
  textAlign: 'left',
  width: '50%',
  height: '150px',
  display: 'inline-block',
  verticalAlign: 'top',
  marginLeft: '1%',
  padding: '1%',
  overflowY: 'scroll',
  boxSizing: 'border-box',
}
const cardHeaderStyle = {
  backgroundColor: '#E9F7EF',
  textAlign: 'center',
  width: '20%',
  display: 'inline-block',
  verticalAlign: 'top',
  height: '150px',
  padding: '3%',
  boxSizing: 'border-box',
}
const aTagStyle = {
  backgroundColor: '#23b567',
  color: 'white',
  borderRadius: '5px',
}
const aLinkStyle = {
  color: '#23b567'
}

export default ({username, avatarUrl, title, url, description}) => (
  <Card style={aCardStyle}>
    <CardHeader
      style={cardHeaderStyle}
      title={username}
      subtitle="❤️s JS"
      avatar={avatarUrl}
    />
    <div style={cardBodyStyle}>
      <CardTitle title={<a style={aTitleStyle} href={url}>{title}</a>} />
      <CardText>{description}</CardText>
      <CardActions>
        <FlatButton label="Action1" style={aTagStyle}/>
        <FlatButton label="Action2" style={aTagStyle}/>
      </CardActions>
    </div>

  </Card>
);
