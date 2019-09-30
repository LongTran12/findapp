import React, { createContext, useState } from 'react'
import dataD from '../data/data.json'

const MyContext = createContext();

function SiteContext({ children }) {

    const filterCate = (cate) => data.filter((e) => e.category === cate)
    const filterCateAll = (cate) => data.filter((e) => e.category.match(cate))
    const filterName = (name) => data.filter((e) => e.name.match(name) || e.description.match(name) || e.category.match(name))
    const filterCateFromName = (name, flat, query) => data.filter((e) => e.category.match(name) && e.platform.match(flat) && (e.name.match(query) || e.description.match(query)))
    const filterPlatform = (platform, cate) => data.filter((e, i) => e.platform.match(platform) && e.category.match(cate))
    const [data, setdata] = useState(dataD);

    return (
        <MyContext.Provider value={
            {
                data,
                setdata,
                filterCate,
                filterName,
                filterCateFromName,
                filterCateAll,
                filterPlatform
            }
        }>
            {children}
        </MyContext.Provider>
    )
}
export default SiteContext
export { SiteContext, MyContext }