// @flow
import './pageHeader.css';
import ProfilePicture from './ProfilePicture';
import * as React from 'react';

const PageHeader = (): React.MixedElement => {
    return (
        <header className="pageHeader">
            <ProfilePicture imageSource="/profile.png" altText="Garrett Wininger" />
        </header>
    );
}

export default PageHeader;
