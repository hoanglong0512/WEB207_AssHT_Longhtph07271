import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LayoutMain from '../pages/layouts/LayoutMain'
import LayoutAdmin from '../pages/layouts/LayoutAdmin'
//Admin
import Dashboard from '../pages/views/Admin/Dashboard';
import ProductsManager from '../pages/views/Admin/Products';
import Detail_Product from '../pages/views/Admin/Detail_Product';
import AddForm from '../pages/views/Admin/AddForm';
import Login from '../pages/views/Admin/Login';
import Categories from '../pages/views/Admin/Categories';
import Users from '../pages/views/Admin/Users';
import EditFormProduct from '../pages/views/Admin/EditFormProduct';
import AddCate from '../pages/views/Admin/AddCate';
import ContactAdmin from '../pages/views/Admin/ContactAdmin';
import BlogAdmin from '../pages/views/Admin/BlogAdmin';
import AddBlog from '../pages/views/Admin/AddBlog';
//Views
import About from '../pages/views/Main/About'
import Home from '../pages/views/Main/Home'
import Contact from '../pages/views/Main/Contact';
import ProductDetail from '../pages/views/Main/ProductDetail';
import ShopProducts from '../pages/views/Main/ShopProducts';
import EditFormCategory from '../pages/views/Admin/EditFormCategory';
import ShopingCart from '../pages/views/Main/ShopingCart';
import ShopSearch from '../pages/views/Main/ShopSearch';
import BlogMain from '../pages/views/Main/BlogMain';
import BlogDetail from '../pages/views/Main/BlogDetail';




const Routers = ({ products,
    onRemove, onAdd, onUpdate,
    categories, onAddCate, onRemoveCate,
    onUpdateCate, AddCart, dataCart, RemoveCart,
    onHandleDown, onHandleUp, blog, contact, onRemoveContact, onAddBlog,
    RemoveBlog
}) => {
    const onHandleRemove = (id) => {
        onRemove(id)
    }
    const onHandleAdd = (product) => {
        onAdd(product)
    }
    const onHandleUpdate = (id, product) => {
        onUpdate(id, product)
    }
    const onAddCategory = (category) => {
        onAddCate(category)
    }
    const onHandleRemoveCate = (id) => {
        onRemoveCate(id)
    }
    const onHandleUpdateCate = (id, category) => {
        onUpdateCate(id, category)
    }
    const AddToCart = (id) => {
        AddCart(id);
    }
    const onRemoveCart = (id) => {
        RemoveCart(id)
    }

    return (
        <Router>
            <Switch>
                <Route path="/admin/:path?/:path?/:path?" exact>
                    <LayoutAdmin>
                        <Switch>
                            <Route path='/admin' exact>
                                <Dashboard products={products} categories={categories} blog={blog} contact={contact} />
                            </Route>
                            <Route path='/admin/products'>
                                <ProductsManager products={products} onRemove={onHandleRemove} categories={categories} />
                            </Route>
                            <Route path="/admin/categories">
                                <Categories categories={categories} products={products} onRemove={onHandleRemoveCate} />
                            </Route>
                            <Route path="/admin/contact">
                                <ContactAdmin contact={contact} onRemove={onRemoveContact} />
                            </Route>
                            <Route path="/admin/add/contact">
                                <AddBlog onAdd={onAddBlog} />
                            </Route>
                            <Route path="/admin/blog">
                                <BlogAdmin blog={blog} onRemove={RemoveBlog} />
                            </Route>
                            <Route path="/admin/users">
                                <Users />
                            </Route>
                            <Route path="/admin/login">
                                <Login />
                            </Route>
                            <Route path="/admin/product/addForm">
                                <AddForm onAdd={onHandleAdd} categories={categories} />
                            </Route>
                            <Route path="/admin/product/detail/:id">
                                <Detail_Product products={products} />
                            </Route>
                            <Route path='/admin/update/product/:id'
                                render={(props) =>
                                    <EditFormProduct {...props} products={products} onUpdate={onHandleUpdate} categories={categories} />
                                }
                            >
                            </Route>
                            <Route path='/admin/update/category/:id'
                                render={(props) =>
                                    <EditFormCategory {...props} categories={categories} onUpdateCate={onHandleUpdateCate} />
                                }
                            >
                            </Route>
                            <Route path="/admin/addForm/categories">
                                <AddCate onAddCate={onAddCategory} />
                            </Route>
                        </Switch>
                    </LayoutAdmin>
                </Route>
                <Route>
                    <LayoutMain>
                        <Switch>
                            <Route path="/" exact>
                                <Home products={products} AddToCart={AddToCart} />
                            </Route>
                            <Route path="/about">
                                <About />
                            </Route>
                            <Route path="/contact">
                                <Contact />
                            </Route>
                            <Route path="/blog">
                                <BlogMain blog={blog} />
                            </Route>
                            <Route path="/detail/blog/:id" exact>
                                <BlogDetail blog={blog} />
                            </Route>
                            <Route path="/search/products/:keyword?">
                                <ShopSearch products={products} AddToCart={AddToCart} />
                            </Route>
                            <Route path="/shop/products">
                                <ShopProducts products={products} AddToCart={AddToCart} categories={categories} />
                            </Route>
                            <Route path="/product/detail/:id" >
                                <ProductDetail products={products} AddToCart={AddToCart} />
                            </Route>
                            <Route path="/shoping-cart">
                                <ShopingCart dataCart={dataCart} onRemoveCart={onRemoveCart} onDown={onHandleDown} onUp={onHandleUp} />
                            </Route>
                        </Switch>
                    </LayoutMain>
                </Route>
            </Switch>
        </Router>
    )
}

Routers.propTypes = {

}

export default Routers
