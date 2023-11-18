import { useState } from "react"
import { AddCategory, GifGrid } from "./components"


export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch'])
    console.log(categories)

    const addCategory = (newCategory) => {

        if(categories.includes(newCategory)) return;
        console.log(newCategory)
        //   setCategories([...categories, 'Spyder-man'])
        setCategories([newCategory, ...categories])
    }
    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory
                //  setCategories={setCategories}
                onNewCategory= {newCategory => addCategory(newCategory)}
            />
            {
                categories.map(category => (
                    <GifGrid 
                    key={ category }
                    category={ category }/>
                ))
            }
        </>
    )
}

export default GifExpertApp
