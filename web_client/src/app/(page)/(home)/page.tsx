import CompanyNumber from './components/CompanyNumber';
import FieldActive from './components/FieldActive';
import NewsEvent from './components/NewsEvent';

export default function Home() {
    return (
        <div className="h-[4000px]">
            <FieldActive />
            <CompanyNumber />
            <NewsEvent />
        </div>
    );
}
