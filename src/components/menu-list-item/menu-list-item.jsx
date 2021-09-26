import React from 'react';
import './menu-list-item.scss';
import {Link} from "react-router-dom";

const MenuListItem = ({item}) => {
    const {title, price, url, category, id} = item;
    let classTitle = `menu__title menu__title-${category}`

    return (
            <li className="menu__item">
                <Link className='menu__link-to-product' to={String(id)}>
                    <div className={classTitle}>{title}</div>
                    <img className="menu__img" src={url} alt={title}></img>
                    <div className="menu__category">Category: <span>{category}</span></div>
                    <div className="menu__price">Price: <span>{price}$</span></div>
                </Link>

                <button className="menu__btn">Add to cart</button>
            </li>

    // <Link className='menu__link-to-product' to={String(id)}>
    //         <li className="menu__item">
    //             <div className={classTitle}>{title}</div>
    //             <img className="menu__img" src={url} alt={title}></img>
    //             <div className="menu__category">Category: <span>{category}</span></div>
    //             <div className="menu__price">Price: <span>{price}$</span></div>
    //             <button className="menu__btn">Add to cart</button>
    //         </li>
    //     </Link>
    )
}

export default MenuListItem;