import React, { useContext } from 'react'
import Brand from './Brand'
import styled from 'styled-components'
import { MyContext } from '../contexts/SiteContext.js';

export default function SectionBrand({ nameCate, flat, query }) {
    const { filterCateFromName } = useContext(MyContext);
    const lowQuery = query.toLowerCase();
    console.log(lowQuery)
    let dataCate = filterCateFromName(flat, lowQuery)
    return (
        <Wrap>
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
`;