// @flow
import './portfolioPage.css';
import CopyrightFooter from './CopyrightFooter';
import CVContent from './CVContent';
import PageHeader from './PageHeader';
import * as React from 'react';

const PortfolioPage = (): React.MixedElement => {
    return (
        <div className="contentArea">
            <PageHeader />
            <CVContent />
            <CopyrightFooter />
        </div>
    );
}

export default PortfolioPage;