import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// layouts
import LayoutAdmin from '../pages/layouts/LayoutAdmin';
import LayoutClient from '../pages/layouts/LayoutClient';

// client
import Home from '../pages/views/client/Home';
import Shop from '../pages/views/client/shop/Shop';
import Contact from '../pages/views/client/contact/Contact';
import About from '../pages/views/client/about/About';
import Blog from '../pages/views/client/blog/Blog';
import BlogDetail from '../pages/views/client/blog/BlogDetail';
import SingleProduct from '../pages/views/client/single-product/SingleProduct';
import ProductDetail from '../pages/views/client/shop/ProductDetail';

//dashboard
import Dashboard from '../pages/views/admin/Dashboard';

//product category
import ShowProductCategory from '../pages/views/admin/product-category/ShowProductCategories';
import AddProductCategory from '../pages/views/admin/product-category/AddProductCategory';
import EditProductCategory from '../pages/views/admin/product-category/EditProductCategory';

//product
import ShowProducts from '../pages/views/admin/products/ShowProduct';
import AddProduct from '../pages/views/admin/products/AddProduct';
import EditProduct from '../pages/views/admin/products/EditProduct';

//news category
import ShowNewsCategory from '../pages/views/admin/news-category/ShowNewsCategory';
import AddNewsCategory from '../pages/views/admin/news-category/AddNewsCategory';
import EditNewsCategory from '../pages/views/admin/news-category/EditNewsCategory';

//news category
import ShowNews from '../pages/views/admin/news/ShowNews';
import AddNews from '../pages/views/admin/news/AddNews';
import EditNews from '../pages/views/admin/news/EditNews';

// contact
import ShowContact from '../pages/views/admin/contact/ShowContact';

const Routers = () => {
    return (
        <Router>
            <Switch>
                <Route path="/admin/:path?/:path?/:path?" exact>
                    <LayoutAdmin>
                        <Switch>
                            <Route path='/admin' exact>
                                <Dashboard />
                            </Route>
                            <Route path='/admin/product' exact>
                                <ShowProducts />
                            </Route>
                            <Route path='/admin/add-product' exact>
                                <AddProduct />
                            </Route>
                            <Route path='/admin/edit-product/:id' exact>
                                <EditProduct />
                            </Route>
                            <Route path='/admin/product-category' exact>
                                <ShowProductCategory />
                            </Route>
                            <Route path='/admin/add-product-category' exact>
                                <AddProductCategory />
                            </Route>
                            <Route path='/admin/edit-product-category/:id' exact>
                                <EditProductCategory />
                            </Route>
                            <Route path='/admin/news-category' exact>
                                <ShowNewsCategory />
                            </Route>
                            <Route path='/admin/add-news-category' exact>
                                <AddNewsCategory />
                            </Route>
                            <Route path='/admin/edit-news-category/:id' exact>
                                <EditNewsCategory />
                            </Route>
                            <Route path='/admin/news' exact>
                                <ShowNews />
                            </Route>
                            <Route path='/admin/add-news' exact>
                                <AddNews />
                            </Route>
                            <Route path='/admin/edit-news/:id' exact>
                                <EditNews />
                            </Route>
                            <Route path='/admin/contact' exact>
                                <ShowContact />
                            </Route>
                        </Switch>
                    </LayoutAdmin>
                </Route>
                <Route >
                    <LayoutClient>
                        <Switch>
                            <Route path="/" exact>
                                <Home />
                            </Route>
                            <Router path="/shop" exact>
                                <Shop />
                            </Router>
                            <Router path="/product-detail/:id" exact>
                                <SingleProduct />
                            </Router>
                            <Router path="/contact" exact>
                                <Contact />
                            </Router>
                            <Router path="/about" exact>
                                <About />
                            </Router>
                            <Router path="/blog" exact>
                                <Blog />
                            </Router>
                            <Route path='/blog-detail/:id' exact>
                                <BlogDetail />
                            </Route>
                            <Router path="/single-product/:id" >
                                <ProductDetail />
                            </Router>
                        </Switch>
                    </LayoutClient>
                </Route>
            </Switch>
        </Router>
    )
}


export default Routers
