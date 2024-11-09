import LazyLoadComponent from '@/components/LazyLoad/LazyLoad';
import FieldActive from './components/FieldActive';
import CompanyNumber from './components/CompanyNumber';
import NewsEvent from './components/NewsEvent';
import EnvirOngroup from './components/EnvirOngroup';

const HomePage: React.FC = () => {
    return (
        <div>
            <LazyLoadComponent>
                <FieldActive keyName="FieldActive" />
            </LazyLoadComponent>

            <LazyLoadComponent>
                <CompanyNumber keyName="CompanyNumber" />
            </LazyLoadComponent>

            <LazyLoadComponent>
                <NewsEvent keyName="NewsEvent" />
            </LazyLoadComponent>

            <LazyLoadComponent>
                <EnvirOngroup />
            </LazyLoadComponent>
        </div>
    );
};

export default HomePage;
