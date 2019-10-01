import React, { createContext } from 'react'
import dataD from '../data/data.json'
const MyContext = createContext();
function SiteContext({ children }) {
    const filterCate = (cate) => dataD.filter((e) => e.category === cate)
    const filterCateAll = (cate) => dataD.filter((e) => e.category.includes(cate))
    const filterCateFromName = (flat, query) => {
        return dataD.filter(
            (e) => {
                let nameA = e.name.toLowerCase()
                let description = e.description.toLowerCase()
                console.log(description, description.includes(query),
                    e.platform.includes(flat)
                    && (nameA.includes(query) || description.includes(query))
                )
                return (
                    e.platform.includes(flat)
                    && (nameA.includes(query) || description.includes(query))
                )
            }
        )
    }
    const filterPlatform = (platform, cate) => {
        return dataD.filter(
            (e) => {
                return e.platform.match(platform) && e.category.match(cate)
            }
        )
    }
    return (
        <MyContext.Provider value={
            {
                dataD,
                filterCate,
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