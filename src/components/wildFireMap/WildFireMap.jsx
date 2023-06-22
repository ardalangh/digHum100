import React, {useState, useEffect} from "react";
import {ComposableMap, Geographies, Geography, Marker} from "react-simple-maps";
import {scaleQuantize} from "d3-scale";
import {csv} from "d3-fetch";
import ca from './ca.json';
import ca2022 from './ca2022.json';

const colorScale = scaleQuantize()
    .domain([1, 10])
    .range([
        "#ffedea",
        "#ffcec5",
        "#ffad9f",
        "#ff8a75",
        "#ff5533",
        "#e2492d",
        "#be3d26",
        "#9a311f",
        "#782618"
    ]);

function WildFireMap(props) {
    const [data, setData] = useState([]);

    useEffect(() => {
        // https://www.bls.gov/lau/
        csv("/unemployment-by-county-2017.csv").then(counties => {
            setData(counties);
        });
    }, []);
    return (
        <>
            <ComposableMap projection="geoAlbersUsa">
                <Geographies geography={ca}>
                    {({geographies}) =>
                        geographies.map(geo => {
                            console.log(geo.properties)
                            if (geo.properties.COUNTYFP === '058') {
                                return <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    fill={"#782618"}
                                />
                            }
                            const cur = data.find(s => s.id === geo.id);
                            return (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    fill={"#ff8a75"}
                                />
                            );
                        })
                    }
                </Geographies>
                {console.log(Object.keys(ca2022).length)}
                {/*{ca2022.map((f) => {*/}
                {/*    console.log(f)*/}
                {/*    return (*/}
                {/*        <Marker coordinates={[f.latitude, f.longitude]}>*/}
                {/*            <circle r={1} fill="#F00" stroke="#fff" strokeWidth={2}/>*/}
                {/*        </Marker>*/}
                {/*)})}*/}

            </ComposableMap>
        </>
    );
}

export default WildFireMap;
// import ca from './ca.json'
//
// import React from 'react';
// import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
//
// const WildFireMap = () => {
//     return (
//         <div>
//             <ComposableMap projection="geoAlbersUsa">
//
//                 <Geographies geography={ca}>
//                     {({ geographies }) =>
//                         geographies.map((geo) => (
//                             <Geography key={geo.rsmKey} geography={geo} />
//                         ))
//                     }
//                 </Geographies>
//             </ComposableMap>
//         </div>
//     );
// };
//
//
// export default WildFireMap;