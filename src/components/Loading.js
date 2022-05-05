import React from 'react';

import { css } from "@emotion/react";
import BarLoader from "react-spinners/BarLoader";

const overrride = css`
    display: block;
    position: absolute;
    border-color: #038CFF;
    align-self: center;
    justify-self: center;
    
`;

const Loading = () => {
    return ( 
        <BarLoader 
            css={overrride}
            color={"#038CFF"}
            height={15}
            width={200}
        /> 
    );
}
 
export default Loading;