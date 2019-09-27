import React, { createContext, useState } from 'react'
import dataD from '../data/data.json'
import dataF from '../data/dataF.json'
const MyContext = createContext();

function SiteContext({ children }) {
    const filterCate = (cate) => dataF.filter((e) => e.category === cate)
    const filterName = (name) => data.filter((e) => e.name.match(name) || e.description.match(name))

    const [data, setdata] = useState(dataD);

    return (
        <MyContext.Provider value={
            {
                data,
                setdata,
                filterCate,
                filterName
            }
        }>
            {children}
        </MyContext.Provider>
    )
}
export default SiteContext
export { SiteContext, MyContext }