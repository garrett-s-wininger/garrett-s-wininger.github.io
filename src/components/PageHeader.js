// @flow
import './pageHeader.css';
import Image from './Image';
import * as React from 'react';

const styles = {
    profileBackground: {
        height: '9rem',
        width: '100%'
    },
    profilePicture: {
        borderColor: 'white',
        borderRadius: '50%',
        borderStyle: 'solid',
        borderWidth: '0.25rem',
        height: '8rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        transform: 'translate(0, -35%)',
        width: '8rem'
    }
};

const PageHeader = (): React.MixedElement => {
    return (
        <header className="pageHeader">
            <Image source="/profile_background_light.png" altText="Arch Linux" style={styles.profileBackground} />
            <Image source="/profile.png" altText="Garrett Wininger" style={styles.profilePicture} />
        </header>
    );
}

export default PageHeader;
