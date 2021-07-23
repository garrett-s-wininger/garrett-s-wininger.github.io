// @flow
import './pageHeader.css';
import Image from './Image';
import * as React from 'react';

const profileBackgroundHeightRem: number = 9;
const profilePictureBorderWidthRem: number = 0.25;
const profilePictureAxisRem: number = 8;
const profilePictureYTranslationPercentage: number = 35;

const styles = {
    profileHeader: {
        height: `calc(${profileBackgroundHeightRem}rem + (${profilePictureAxisRem}rem * ${(100 - profilePictureYTranslationPercentage) / 100}) + ${profilePictureBorderWidthRem}rem)`
    },
    profileBackground: {
        height: `${profileBackgroundHeightRem}rem`,
        width: '100%'
    },
    profilePicture: {
        borderColor: 'white',
        borderRadius: '50%',
        borderStyle: 'solid',
        borderWidth: `${profilePictureBorderWidthRem}rem`,
        height: `${profilePictureAxisRem}rem`,
        marginLeft: 'auto',
        marginRight: 'auto',
        transform: `translate(0, -${profilePictureYTranslationPercentage}%)`,
        width: `${profilePictureAxisRem}rem`
    }
};

const PageHeader = (): React.MixedElement => {
    return (
        <header className="pageHeader" style={styles.profileHeader}>
            <Image source="/profile_background_light.png" altText="Arch Linux" style={styles.profileBackground} />
            <Image source="/profile.png" altText="Garrett Wininger" style={styles.profilePicture} />
        </header>
    );
}

export default PageHeader;
