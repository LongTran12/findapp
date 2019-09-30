import React, { useContext } from 'react'
import Brand from './Brand'
import styled from 'styled-components'
import { MyContext } from '../contexts/SiteContext.js';
import { Link } from 'react-router-dom'

export default function SectionBrand({ nameCate, flat, query }) {
    const { filterCateFromName } = useContext(MyContext);
    let dataCate = filterCateFromName(nameCate, flat, query)
    return (
        <Wrap>
            <div className="cateBrand">
                <Link to={`/category/${nameCate}`}>{nameCate}</Link></div>
            {
                dataCate.map((index, i) =>
                    <Brand key={i} {...index} />
                )
            }
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
        a{
            text-decoration:none;
        }
    }
`;