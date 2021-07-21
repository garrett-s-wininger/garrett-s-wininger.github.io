// @flow
import * as React from 'react';

type Props = $ReadOnly<{
    source: string,
    altText: string,
    style?: Object,
}>;

const ProfilePicture = ({source, altText, style}: Props): React.MixedElement => {
    return (
        <img src={source} alt={altText} style={style} />
    );
}

export default ProfilePicture;