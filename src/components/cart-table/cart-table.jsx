import React from 'react';
import './cart-table.scss';
import {connect} from "react-redux";
import {deleteFromCard} from "../../actions";

const CartTable = ({arr, deleteFromCard}) => {

    return (
        <>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__list">
                {
                    arr.map(item => {
                        const {title, price, url, id, quantity=0, sum=0} = item;

                        return(
                            <div key={id} className="cart__item">
                                <img src={url} className="cart__item-img" alt={title}></img>
                                <div className="cart__item-title">{title}</div>
                                <div className="cart__item-price">{price}$</div>
                                <div onClick={() => deleteFromCard(id)} className="cart__close">&times;</div>
                                <div className='cart__order'>
                                    <div className='cart__quantity'>{quantity}</div>
                                    <div className='cart__quantity cart__counter'>{sum}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );

};

const mapStateToProps = ({items}) => {
    return {
        arr: items
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteFromCard: (id) => {
            dispatch(deleteFromCard(id));
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);