import { React, useState } from 'react';

export default function Button() {

    const [num, setNum] = useState(1);

    function handleClick() {
        setNum(num + 1);
    }

    return (
        <>
            <h1>{num}</h1>
            <button className="btn btn-success" onClick={handleClick}>Plus One</button>
        </>
    )
}


