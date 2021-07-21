// @flow
'use strict';
import "./copyrightFooter.css";
import * as React from 'react';

const currentDate: Date = new Date();

const CopyrightFooter = (): React.MixedElement => {
    return (
        <footer className="copyrightFooter">
            <p>{`Copyright \u00A9 Garrett Wininger, ${currentDate.getFullYear()}. All rights reserved.`}</p>
        </footer>
    );
}

export default CopyrightFooter;