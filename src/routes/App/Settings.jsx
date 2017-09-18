import React from 'react';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const origin = {
  horizontal: 'right',
  vertical: 'top',
};

const iconButtonElement = <IconButton><MoreVertIcon /></IconButton>;

export default () => (
  <IconMenu
    iconButtonElement={iconButtonElement}
    targetOrigin={origin}
    anchorOrigin={origin}
  >
    <MenuItem primaryText="Settings" />
    <MenuItem primaryText="Sign out" />
  </IconMenu>
);
