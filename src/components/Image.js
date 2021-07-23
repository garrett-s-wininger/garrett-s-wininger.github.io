// @flow
import * as React from 'react';

type Props = $ReadOnly<{
    source: string,
    altText: string,
    dataTestId?: string,
    style?: Object,
}>;

const Image = ({source, altText, dataTestId, style}: Props): React.MixedElement => {
    return (
        <img src={source} alt={altText} style={style} data-testid={dataTestId} />
    );
}

export default Image;