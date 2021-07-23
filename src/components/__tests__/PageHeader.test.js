import PageHeader from '../PageHeader';
import {cleanup, render} from '@testing-library/react';

describe('PageHeader Light Theme', () => {
    let component;
    
    beforeEach(() => {
        global.matchMedia = jest.fn().mockImplementation(() => {
            return {
                addEventListener: () => {},
                matches: true
            };
        });

        component = render(<PageHeader />);
    });

    afterEach(() => {
        cleanup();
        global.matchMedia.mockClear();
    });

    it('should display the light background image', () => {
        const backgroundImage = component.getByTestId('profile-background-image');

        expect(backgroundImage).toHaveAttribute('src', '/profile_background_light.png');
    });
});

describe('PageHeader Dark Theme', () => {
    let component;

    beforeEach(() => {
        global.matchMedia = jest.fn().mockImplementation(() => {
            return {
                addEventListener: () => {},
                matches: false
            };
        });

        component = render(<PageHeader />);
    });

    afterEach(() => {
        cleanup();
        global.matchMedia.mockClear();
    });

    it('should display the light background image', () => {
        const backgroundImage = component.getByTestId('profile-background-image');

        expect(backgroundImage).toHaveAttribute('src', '/profile_background_dark.png');
    });
});
