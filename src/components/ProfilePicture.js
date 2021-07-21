// @flow
import './profilePicture.css';
import * as React from 'react';

type Props = $ReadOnly<{
    imageSource: string,
    altText: string,
    style?: Object,
}>;

const ProfilePicture = ({imageSource, altText, style}: Props): React.MixedElement => {
    return (
        <img className="profilePicture" src={imageSource} alt={altText} style={style}/>
    );
}

export default ProfilePicture;