import { useLocation, useParams } from 'react-router-dom';
const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};
const useParam = () => {
    let data = useParams();
    return data;
};
export { useQuery, useParam };
