import React, {useState, useEffect} from 'react'
import Category from './Category';
import './CategoryTab.css';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';


const CategoryTab = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const response = await fetch(`https://backend.ustraa.com/rest/V1/api/homemenucategories/v1.0.1?device_type=mob`);
        const data = await response.json();
        setCategories(data.category_list);
        console.log(data.category_list);
    }



    return (
        <div className="categoryTab">
            <ScrollMenu visibility="hidden" >
            {categories.map(category =>(
                <Category
                    key={category.category_id}
                    category_name = {category.category_name}
                    category_image = {category.category_image}
                />
            ))}
            </ScrollMenu>
        </div>
    )
}

export default CategoryTab
