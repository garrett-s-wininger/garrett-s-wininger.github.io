// @flow
import './pageHeader.css';
import ProfilePicture from './ProfilePicture';
import * as React from 'react';

const styles = {
    profilePicture: {
        width: '12rem',
        height: '12rem'
    }
};

const PageHeader = (): React.MixedElement => {
    return (
        <header className="pageHeader">
            <ProfilePicture imageSource="/profile.png" altText="Garrett Wininger" style={styles.profilePicture} />
        </header>
    );
}

export default PageHeader;
