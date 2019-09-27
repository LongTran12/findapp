import React from 'react'
import styled from 'styled-components'

export default function Brand({ logo, name, description }) {
    return (
        <Wrap>
            <div className="image">
                <img src={logo} alt="im" width="100%" />
            </div>
            <div className="info">
                <h4>{name}</h4>
                <p>{description}</p>
            </div>
        </Wrap>
    )
}
const Wrap = styled.div`
    display:flex;
    align-items:flex-start;
    justify-content:flex-start;
    width:33.333%;
    margin-bottom:20px;
    .image{
       img{
        width:44px;
       }
    }
    .info{
        margin-left:10px;
        h4{
            font-size:14px;
            margin-bottom:8px;
        }
        p{

        }
    }
`;
