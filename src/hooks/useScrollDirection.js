import { useState, useEffect } from 'react';

const useScrollDirection = ({ initialDirection, thresholdPixels, off } = {}) => {
    const [scrollDirection, setScrollDirection] = useState(initialDirection);

    useEffect(() => {
        const threshold = thresholdPixels || 0;
        let lastScrollY = window.pageYOffset;
        let ticking = false;

        const updateScrollDir = () => {
            const scrollY = window.pageYOffset;

            if (Math.abs(scrollY - lastScrollY) < threshold) {
                ticking = false;
                return;
            }

            setScrollDirection(scrollY > lastScrollY ? 'down' : 'up');
            lastScrollY = scrollY > 0 ? scrollY : 0;
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateScrollDir);
                ticking = true;
            }
        };

        /**
         * Bind the scroll handler if `off` is set to false.
         * If `off` is set to true, ensure the handler is unbound.
         */
        !off ? window.addEventListener('scroll', onScroll) : window.removeEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, [initialDirection, thresholdPixels, off]);

    return scrollDirection;
};

export default useScrollDirection;
