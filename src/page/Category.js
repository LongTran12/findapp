import React from 'react'
import styled from 'styled-components'
import ContentFilter from '../components/ContentFilter'
export default function Category({ match }) {
    console.log(match.params.cate)
    return (
        <Wrap>
            <ContentFilter nameCate={match.params.cate} />
        </Wrap>
    )
}
const Wrap = styled.div`
    padding-top:100px;
`;