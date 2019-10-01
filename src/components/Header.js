import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { MyContext } from '../contexts/SiteContext'
import ContentFilter from '../components/ContentFilter'
import FindBrand from "./FindBrand"

export default function Header() {
    const [isValue, setisValue] = useState('')
    const handleChangeInput = (e) => {
        setisValue(e.target.value)
    }
    const [isPlatform, setisPlatform] = useState('')
    const handleChangeSelect = (e) => {
        setisPlatform(e.target.value)
    }
    const { filterCateAll, dataD } = useContext(MyContext)
    let dataCate = filterCateAll(isValue)
    let arrCate = Array.from(new Set(dataCate.map(i => i.category)))
    const arrPlat = Array.from(new Set(dataD.map(i => i.platform)))
    return (
        <Wrap>
            <div children="search">
                <form>
                    <div className="select-form">
                        <select id="pla" value={isPlatform} onChange={handleChangeSelect}>
                            <option value="">All Platform</option>
                            {arrPlat.map((index, i) => <option key={i} value={index}>{index}</option>)}
                        </select>
                    </div>
                    <input id="input-search" type="text" placeholder="Enter text search ..." value={isValue} onChange={handleChangeInput} />
                </form>
                <div id="block-search">
                    {isValue === ''
                        ? arrCate.map((item, i) => <ContentFilter key={i} nameCate={item} platform={isPlatform} />)
                        : <FindBrand query={isValue} flat={isPlatform} />
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
            border:2px solid #ebebeb;
        }
        input[type="text"]{
            min-width:300px;
        }
        .select-form{
            padding: 10px 20px;
            border: 2px solid #ebebeb;
            position: relative;
            border-right:0;
            select{
                cursor: pointer;
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
    #block-search{
        .feature{
            .cateBrand{
                margin-left:10px;
            }
            .brand-item{
                width:auto !important;
                margin:10px 20px 20px 10px;
                box-shadow:0 1px 10px rgba(0,0,0,.3);
                border-radius:7px;
                padding:0;
                a{
                    flex-flow:column;
                    text-align:center;
                    align-items:center;
                    max-width:150px;
                    .image{
                        img{
                            width:150px;
                        }
                    }
                    .info{
                        margin-left:0;
                        h4{
                            padding-top: 1px;
                            font-size: 14px;
                            font-weight: 600;
                            margin-bottom: 22px;
                            text-align: center;
                            color: #233240;
                        }
                        p{
                            margin: -23px 4px 4px;
                            line-height: 13px;
                            border-radius: 10px;
                            text-align: center;
                            font-size: 11.8px;
                            color: rgba(44,62,80,.6);
                        }
                    }
                }
            }
        }
       
        
        .section-brand{          
            >div:nth-child(n+5){
                display:none;
            }
        }
    }
    @media (max-width:600px){
        form{
            input[type="text"]{
                min-width:auto;
                width:100%;
            }
        }
    }
    @media (max-width:600px){
        #block-search{
            .feature{
                justify-content:center;
                .cateBrand{
                    margin-left:0;
                }
                .brand-item{
                    margin:10px;
                    a{
                        flex-flow:column;
                        text-align:center;
                        align-items:center;
                        max-width:max-content;
                    .image{
                        img{
                            width:100%;
                        }
                }
            }
        }
    }

`;
