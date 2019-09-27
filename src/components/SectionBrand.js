import React, { useContext } from 'react'
import Brand from './Brand'
import styled from 'styled-components'
import { MyContext } from '../contexts/SiteContext.js';

export default function SectionBrand({ nameCate }) {
    const { filterCate } = useContext(MyContext);
    let dataCate = filterCate(nameCate)
    console.log(dataCate)
    return (
        <Wrap>
            <div className="cateBrand">{nameCate}</div>
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