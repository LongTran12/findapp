import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { MyContext } from '../contexts/SiteContext'


export default function Header() {
    const [isValue, setisValue] = useState('')
    const handleChangeInput = (e) => {
        setisValue(e.target.value)
    }
    const { filterName, filterCate } = useContext(MyContext)

    return (
        <Wrap>
            <div children="search">
                <form>
                    <input type="text" placeholder="Enter text search ..." value={isValue} onChange={handleChangeInput} />
                </form>

                <div>
                    {filterCate(isValue).map((index, i) =>
                        <div key={i}>{index.name}</div>
                    )}
                </div>
                <div>
                    {isValue !== '' && filterName(isValue).map((index, i) =>
                        <div key={i}>{index.name}</div>
                    )}
                </div>
            </div>
        </Wrap>
    )
}
const Wrap = styled.div`
    padding:100px 0;
    form{
        display: flex;
        align-items:center;
        justify-content:center;
        input{
            padding:10px 25px;
            font-size:16px;
        }
        input[type="text"]{
            min-width:300px;
        }
    }
`;
