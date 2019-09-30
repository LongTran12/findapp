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
        <Wrap>
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
        a{
            text-decoration:none;
        }
    }
    &.feature{
        margin:0 -10px;
        .cateBrand{
            margin-left:10px;
        }
        .brand-item{
            width:auto !important;
            margin:10px 20px 20px 10px;
            box-shadow:0 1px 10px rgba(0,0,0,.3);
            border-radius:7px;
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
`;