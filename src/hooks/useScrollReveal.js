import { useEffect } from 'react';

const useScrollReveal = (ref, delay = 0) => {
    useEffect(() => {
        if (ref.current) {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            ref.current.classList.add('visible');
                        }, delay);
                        observer.unobserve(ref.current);
                    }
                },
                {
                    root: null,
                    rootMargin: '0px',
                    threshold: 0.25,
                },
            );

            observer.observe(ref.current);

            return () => observer.disconnect();
        }
    }, [ref, delay]);
};

export default useScrollReveal;
