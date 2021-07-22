// @flow
import "./copyrightFooter.css";
import * as React from 'react';

const currentDate: Date = new Date();
const imageAuthorName: string = 'dxiri';
const imageAuthorUrl: string = 'https://flickr.com/photos/66346231@N06/';
const imageLicenseName: string = 'CC BY-ND 2.0';
const imageLicenseUrl: string = 'https://creativecommons.org/licenses/by-nd/2.0/legalcode';
const imageName: string = 'arch5_1920x1080_lightblue';
const imageUrl: string = 'https://flic.kr/p/ezV6vH';

const styles = {
    pageCopyrightNotice: {
        marginBottom: '0.5rem'
    }
};

const CopyrightFooter = (): React.MixedElement => {
    return (
        <footer className="copyrightFooter">
            <p style={styles.pageCopyrightNotice}>{`Copyright \u00A9 Garrett Wininger, ${currentDate.getFullYear()}. All rights reserved.`}</p>
            <p>
                <a href={imageUrl}>{imageName}</a> by <a href={imageAuthorUrl}>{imageAuthorName}</a> licensed under
                {' '}<a href={imageLicenseUrl}>{imageLicenseName}</a>
            </p>
        </footer>
    );
}

export default CopyrightFooter;