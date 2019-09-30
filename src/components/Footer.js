import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <Wrap>
            <p>We do not control or endorse the Dapps listed, simply provide them as a list of convenience for you. Please investigate and proceed at your own risk.</p>
            <div><Link to="/contact-us">Contact us</Link></div>
        </Wrap>
    )
}
const Wrap = styled.div`
    padding: 30px 0;
    border-top:1px solid #ebebeb;
    p{
        text-align:center;
        margin-bottom:15px;
        
    }
    div{
        text-align:center;
        a{
            font-size:16px;
            text-decoration:none;
            :hover{
                text-decoration:none;
            }
        }
    }
`;
