import React, { Component } from 'react';
import RightSideCart from '../../../components/client/RightSideCart';
import Banner from '../../../components/client/Banner';
import TopCategory from '../../../components/client/TopCategory';
import Sale from '../../../components/client/Sale';
import Brand from '../../../components/client/Brand';
import TopProduct from '../../../components/client/TopProduct';

export default class Home extends Component {
    render() {
        return (
            <div className="main-content">
                <RightSideCart />
                <Banner />
                <TopCategory />
                <Sale />
                <TopProduct />
                <Brand />
            </div>
        )
    }
}
