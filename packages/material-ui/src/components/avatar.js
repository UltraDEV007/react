import React from 'react';
import MuiAvatar from 'material-ui/Avatar';
import SocialPerson from 'material-ui/svg-icons/social/person';

const Avatar = () =>
  <MuiAvatar
    size={96} icon={<SocialPerson />} style={{
      marginBottom: 10,
    }}
  />;

export default Avatar;
