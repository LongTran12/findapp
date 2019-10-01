import React, { useContext } from 'react'
import Brand from './Brand'
import styled from 'styled-components'
import { MyContext } from '../contexts/SiteContext.js';
import { Link } from 'react-router-dom'

export default function ContentFilter({ nameCate, platform }) {
    const { filterPlatform } = useContext(MyContext);
    const dataPlat = filterPlatform(platform, nameCate)
    if (nameCate === "new dapps") {
        return (<Wrap className="feature">
            <div className={`cateBrand`}>
                <Link to={`/category/${nameCate}`}>{nameCate}</Link>
            </div>
            {dataPlat.map((index, i) => <Brand key={i} {...index} />)}
        </Wrap>)
    }
    return (
        <Wrap className="section-brand">
            <div className={`cateBrand`}>
                <Link to={`/category/${nameCate}`}>{nameCate}</Link>
            </div>
            {dataPlat.map((index, i) => <Brand key={i} {...index} />)}
        </Wrap>
    )
}
const Wrap = styled.div`
    display:flex;
    flex-flow:row wrap;
    .cateBrand{
        font-size:20px;
        display:block;
        width:100%;
        padding-bottom:10px;
        margin-bottom:20px;
        border-bottom:1px solid #ebebeb;
        text-transform:capitalize;
        margin-left:15px; 
        a{
            text-decoration:none;
            font-weight:bold;
            color:#333;
        }
    }
    @media (max-width:768px){
       .cateBrand{
           margin-left:0;
       }
    }
`;