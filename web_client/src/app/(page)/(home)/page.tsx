import CompanyNumber from './components/CompanyNumber';
import EnvirOngroup from './components/EnvirOngroup';
import FieldActive from './components/FieldActive';
import NewsEvent from './components/NewsEvent';

export default function HomePage() {
    return (
        <div className="">
            <FieldActive />
            <CompanyNumber />
            <NewsEvent />
            <EnvirOngroup />
        </div>
    );
}
