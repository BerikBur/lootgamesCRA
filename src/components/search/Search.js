import React, { useState, useEffect, useRef } from 'react';
import './Search.css';

function Search() {
    const products = [
        'Apple',
        'Banana',
        'Orange',
        'Grape',
        'Pineapple',
        'Mango',
        'Strawberry',
    ];
    
    const [input, setInput] = useState('');
    const [results, setResults] = useState([]);
    const [resultsVisible, setResultsVisible] = useState(false);
    const resultsRef = useRef(null);

    const handleInputChange = (event) => {
        const value = event.target.value;
        setInput(value);

        if (value) {
            const filteredResults = products.filter(product =>
                product.toLowerCase().includes(value.toLowerCase())
            );
            setResults(filteredResults);
            setResultsVisible(true);
        } else {
            setResults([]);
            setResultsVisible(false);
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            clearInput();
        }
    };

    const handleClickOutside = (event) => {
        if (resultsRef.current && !resultsRef.current.contains(event.target)) {
            clearInput();
        }
    };

    const clearInput = () => {
        setInput('');
        setResults([]);
        setResultsVisible(false);
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className={`search ${resultsVisible ? 'results-visible' : ''}`}>
            <input 
                className={`input ${resultsVisible ? 'input-results-visible' : ''}`}
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder="Поиск товаров..."
            />
            {resultsVisible && (
                <div className="clear-icon" onClick={clearInput}></div>
            )}
            {resultsVisible && results.length > 0 && (
                <div className="results" ref={resultsRef}>
                    {results.map((product, index) => (
                        <div key={index} className="result-item">
                            {product}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Search;
