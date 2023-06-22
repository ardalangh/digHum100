import React, { useEffect, useState } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as tfvis from '@tensorflow/tfjs-vis';

const T = () => {
    const [data, setData] = useState(null);


    return (
        <div>
            <h1>CSV Reader Component</h1>
            {data && <p>Data loaded successfully!</p>}
            {/* Render your data or visualization */}
        </div>
    );
};

export default T;