import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import {connect} from "react-redux";
import WithRestoService from "../hoc";
import {menuLoaded, menuRequested, menuError} from "../../actions";
import Spinner from "../spinner";
import Error from "../error";
import './menu-list.scss';

class MenuList extends Component {

    componentDidMount() {
        const {RestoService, menuLoaded, menuRequested, menuError} = this.props;

        menuRequested();

        RestoService.getMenuItems()
            .then(result => menuLoaded(result))
            .catch(() => menuError())
    }

    render() {
        const {menuItems, loading, error} = this.props;

        if (error) return <Error />
        if (loading) return <Spinner />

        return (
            <View menuItems={menuItems}/>
        )
    }
}

// настройка функции высшего порядка connect()
const mapStateToProps = (state) => {
    return {
        menuItems: state.menu,
        loading: state.loading,
        error: state.error
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        menuLoaded: (newMenu) => {
            dispatch(menuLoaded(newMenu));
        },
        menuRequested: () => {
            dispatch(menuRequested());
        },
        menuError: () => {
            dispatch(menuError());
        },
    }
};

const View = ({menuItems}) => {
    return(
        <ul className="menu__list">
            {
                menuItems.map(item => {
                    return <MenuListItem key={item.id} item={item}/>
                })
            }
        </ul>
    )
};

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));