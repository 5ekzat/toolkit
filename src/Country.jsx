import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from './redux/slices/countrySlice';

const Country = () => {
    const { countryData } = useSelector((state) => state.counteries);
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [searchNotFound, setSearchNotFound] = useState(false);

    useEffect(() => {
        dispatch(getCountries());
    }, [dispatch]);

    useEffect(() => {
        
        const filtered = countryData ? countryData.filter(country =>
            country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
        ) : [];
        
        
        if (filtered.length === 0 && searchQuery !== '') {
            setSearchNotFound(true); 
        } else {
            setSearchNotFound(false);
        }
        
        setFilteredCountries(filtered);
    }, [countryData, searchQuery]);

    const handleSearch = () => {
       
        if (searchQuery.trim() !== '') {
         
            const filtered = countryData ? countryData.filter(country =>
                country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
            ) : [];
            setFilteredCountries(filtered);
        } else {
           
            setFilteredCountries(countryData || []);
        }
    };

    const clearSearch = () => {
        setSearchQuery('');
        setFilteredCountries(countryData || []);
        setSearchNotFound(false);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Поиск страны..."
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
            />
            <button onClick={handleSearch}>Поиск</button>
            <button onClick={clearSearch}>Очистить</button>
            {searchNotFound && <p>Страна не найдена</p>}
            <div>
                {filteredCountries && filteredCountries.map(country => (
                    <div key={country.alpha2Code}>
                        <h5>{country.name.common}</h5>
                        <img src={country.flags.svg} alt={country.name.common} style={{ width: '100px' }} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Country;
