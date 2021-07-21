// @flow
'use strict';
import './profilePicture.css';
import * as React from 'react';

type Props = $ReadOnly<{
    imageSource: string,
    altText: string
}>;

const ProfilePicture = ({imageSource, altText}: Props): React.MixedElement => {
    return (
        <img className="profilePicture" src={imageSource} alt={altText} />
    );
}

export default ProfilePicture;