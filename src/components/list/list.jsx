import React, { useState } from 'react';
import { Details } from '../details';
import { usePolling } from '../../hooks/usePolling';

export const List = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const { data: list, isLoading, error } = usePolling(import.meta.env.VITE_LIST_URL, []);

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    return (
        <div className='container'>
            {isLoading ? <h3>Loading...</h3> : (
                <ul className='users-list'>
                    {list.map(item => (
                        <li key={item.id} className='user-item' onClick={() => handleItemClick(item)}>{item.name}</li>
                    ))}
                </ul>
            )}
        {error && <p className='error'>{error}</p>}
        {selectedItem && (
            <Details info={selectedItem} />
        )}
    </div>
    );
}