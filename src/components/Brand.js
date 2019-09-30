import React from 'react'
import styled from 'styled-components'

export default function Brand({ logo, name, description, url }) {
    return (
        <Wrap className="brand-item">
            <a href={url}>
                <div className="image">
                    <img src={logo} alt="im" width="100%" />
                </div>
                <div className="info">
                    <h4>{name}</h4>
                    <p>{description}</p>
                </div>
            </a>
        </Wrap>
    )
}
const Wrap = styled.div`
    display:flex;
    align-items:flex-start;
    justify-content:flex-start;
    width:33.333%;
    margin-bottom:20px;
    a{
        display:flex;
        align-items:flex-start;
        justify-content:flex-start;
        margin-bottom:20px;
        text-decoration:none;
        .image{
            img{
                width:44px;
            }
        }
        .info{
            margin-left:10px;
            h4{
                font-size: 18px;
                font-weight: 400;
                letter-spacing: 1px;
                color: #233240;
                margin-bottom:8px;
                text-transform:capitalize
            }
            p{
                flex: 1 1;
                line-height: 16px;
                font-size: 14px;
                font-weight: 300;
                color: rgba(44,62,80,.6);
            }
        }
    }
    
`;
