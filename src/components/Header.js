import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { MyContext } from '../contexts/SiteContext'
import SectionBrand from '../components/SectionBrand'
import ContentFilter from '../components/ContentFilter'

export default function Header() {
    const [isValue, setisValue] = useState('')
    const handleChangeInput = (e) => {
        setisValue(e.target.value)
    }
    const [isPlatform, setisPlatform] = useState('')
    const handleChangeSelect = (e) => {
        setisPlatform(e.target.value)
    }
    const { filterName, filterCateAll, data } = useContext(MyContext)
    let dataCate = filterCateAll(isValue)
    let arrCate = Array.from(new Set(dataCate.map(i => i.category)))
    let dataName = filterName(isValue)
    let arrName = Array.from(new Set(dataName.map(i => i.category)))
    const arrPlat = Array.from(new Set(data.map(i => i.platform)))

    return (
        <Wrap>
            <div children="search">
                <form>
                    <input id="input-search" type="text" placeholder="Enter text search ..." value={isValue} onChange={handleChangeInput} />
                    <div className="select-form">
                        <select id="pla" value={isPlatform} onChange={handleChangeSelect}>
                            <option value="">All Coin</option>
                            {arrPlat.map((index, i) => <option key={i} value={index}>{index}</option>)}
                        </select>
                    </div>
                </form>

                <div id="block-search">
                    {isValue === '' ? arrCate.map((item, i) => <ContentFilter key={i} nameCate={item} platform={isPlatform} />)
                        : arrName.map((index, i) =>
                            <SectionBrand key={i} nameCate={index} query={isValue} flat={isPlatform} />
                        )
                    }
                </div>
            </div>
        </Wrap>
    )
}
const Wrap = styled.div`
    padding:100px 0;
    form{
        margin-bottom:50px;
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
        .select-form{
            padding: 10px 20px;
            border: 2px solid #ebebeb;
            position: relative;
            border-left:0;
            select{
                border:0;
                font-size:14px;
                background:transparent;
                text-align:center;
                :focus,:active{
                    border:0;
                    outline-offset:8px;
                }
            }
        }
    }
`;
