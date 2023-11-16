import { usePolling } from '../../hooks/usePolling';

export const Details = ({ info }) => {
    const { data: details, isLoading, error } = usePolling(`${import.meta.env.VITE_DETAILS_URL}${info.id}.json`, []);

    return (
        <div className='details-wrapper' data-id={details.id}>
            {isLoading ? <h3>Loading...</h3> : (
                <>
                    <img src={details.avatar} alt={details.name} className='user-avatar' />
                    <div className='user-text user-name'>{details.name}</div>
                    <p className='user-text user-city'>City: {details.details && details.details.city}</p>
                    <p className='user-text user-company'>Company: {details.details && details.details.company}</p>
                    <p className='user-text user-position'>Position: {details.details && details.details.position}</p>
                </>
            )}
            {error && <p className='error'>{error}</p>}
        </div>
    );
};
