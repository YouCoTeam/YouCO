import React, { Component } from 'react';
import Avatar from 'avataaars';

class UserAvatar extends Component {
    render () {
        return (
            <div>
                Your avatar:
                <Avatar
                style={{width: '400px', height: '400px'}}
                avatarStyle='Circle'
                topType='LongHairMiaWallace'
                accessoriesType='Prescription02'
                hairColor='BrownDark'
                facialHairType='Blank'
                clotheType='Hoodie'
                clotheColor='PastelBlue'
                eyeType='Happy'
                eyebrowType='Default'
                mouthType='Smile'
                skinColor='Light'
                />
            </div>
          );
      }
}

export default UserAvatar;