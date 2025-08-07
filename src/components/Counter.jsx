import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleIncr = () => {
        setCount(count + 1);
    }

    const handleDecr = () => {
        setCount(count - 1);
    }

    return (
        <div className='size-52 bg-teal-200 flex flex-col items-center justify-center rounded-2xl shadow-2xl border-4 border-teal-600'>
            <div >
                <h2 className="text-3xl font-bold py-2 text-teal-600">Count: {count}</h2>
            </div>
            <div className="mb-4">
                <button onClick ={handleIncr} className="bg-teal-600 text-teal-200 px-4 py-2 rounded mr-2 hover:bg-teal-500">
                    +1
                </button>
                <button onClick ={handleDecr} className="bg-teal-600 text-teal-200 px-4 py-2 rounded mr-2 hover:bg-teal-500">
                    -1
                </button>
            </div>
        </div>
    )
}

export default Counter
