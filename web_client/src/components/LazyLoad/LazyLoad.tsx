'use client';
import { useInView } from 'react-intersection-observer';

interface LazyLoadComponentProps {
    children: React.ReactNode;
}

const LazyLoadComponent: React.FC<LazyLoadComponentProps> = ({ children }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1, // Hiển thị khi 10% component vào khung nhìn
        rootMargin: '50px 0px', // Giúp các phần tử xuất hiện khi gần đến khung nhìn
    });

    return (
        <div ref={ref} className={`lazy-item ${inView ? 'visible' : ''}`}>
            {inView ? children : null}
        </div>
    );
};

export default LazyLoadComponent;
