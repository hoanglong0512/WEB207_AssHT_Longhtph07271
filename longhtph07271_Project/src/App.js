import React, { useState, useEffect } from 'react';
import Routers from './routers';
import apiProducts from './api/productApi';
import apiCategories from './api/categoriesApi';
import apiBlog from './api/blogApi';
import apiContact from './api/contactApi';
import swal from 'sweetalert';
function App() {
  // admin
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [blog, setBlog] = useState([]);
  const [contact, setContact] = useState([]);
  // client
  const [cart, setCart] = useState([]);
  // get Contact
  useEffect(() => {
    const getContact = async () => {
      try {
        const { data } = await apiContact.getAll();
        setContact(data);
      } catch (error) {
        console.log('failed to request API: ', error)
      }
    }
    getContact();
  }, [])

  // xóa Contact

  const onRemoveContact = async (id) => {
    try {
      const { data } = await apiContact.remove(id);
      const newContact = contact.filter(item => item.id !== id);
      swal("Thông Báo", "Xóa Contact Thành Công!", "success");
      setContact(newContact);
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }

  // list Blog

  useEffect(() => {
    const getBlog = async () => {
      try {
        const { data } = await apiBlog.getAll();
        setBlog(data);
      } catch (error) {
        console.log('failed to request API: ', error)
      }
    }
    getBlog();
  }, []);

  // add Blog

  const AddNewBlog = async (newBlog) => {
    try {
      const { data } = await apiBlog.create(newBlog);
      const blogNew = {
        id: data.id,
        title: data.title,
        image: data.image,
        by: data.by,
        short_desc: data.short_desc,
        content: data.content
      }
      setBlog([
        ...blog,
        blogNew
      ])
    } catch (error) {
      console.log('failed to request API: ', error)
    }

  }

  // xóa Blog
  const RemoveBlog = async (id) => {
    try {
      const { data } = await apiBlog.remove(id);
      const newBlog = blog.filter(item => item.id !== id);
      setBlog(newBlog);
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }
  // List categories
  useEffect(() => {
    const getCategories = async () => {
      try {
        const { data } = await apiCategories.getAll();
        setCategories(data);
      } catch (error) {
        console.log('failed to request API: ', error)
      }
    }
    getCategories();
  }, []);
  // Thêm Danh Mục
  const onHandleAddCategory = async (category) => {
    try {
      const { data } = await apiCategories.create(category);
      const obj = {
        id: data.id,
        name: data.name,
        description: data.description,
        show_menu: data.show_menu
      };
      setCategories([
        ...categories,
        obj
      ])
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }
  // Xóa danh mục
  const onHandleRemoveCate = async (id) => {
    try {
      const { data } = await apiCategories.remove(id);
      console.log(categories);
      console.log("new")
      const newCategories = categories.filter(category => category.id !== id);
      setCategories(newCategories);
      console.log(newCategories);
    } catch (error) {
      console.log('failed to request API: ', error)
    }

  }
  // Cập nhật danh mục 
  const onHandleUpdateCate = (id, updateCategory) => {
    const newCategories = categories.map(category => (
      category.id == id ? updateCategory : category
    ));
    apiCategories.update(id, updateCategory);
    setCategories(newCategories);
  }
  // Danh sách sản phẩm
  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await apiProducts.getAll();
        setProducts(data);
      } catch (error) {
        console.log('failed to request API: ', error)
      }
    }
    getProducts();
  }, []);


  // Xóa sản phẩm
  const onHandleRemove = async (id) => {
    try {
      const { data } = await apiProducts.remove(id);
      console.log(id);
      const newProducts = products.filter(product => product.id !== id);
      console.log(newProducts);
      setProducts(newProducts);
      console.log("new");
      console.log(products);
    } catch (error) {
      console.log('failed to request API: ', error)
    }

  }
  // Thêm sản phẩm
  const onHandleAdd = async (product) => {
    try {
      const { data } = await apiProducts.create(product);
      const obj = {
        id: data.id,
        name: data.name,
        cate_id: data.cate_id,
        image: data.image,
        short_desc: data.short_desc,
        price: data.price,
        price_sale: data.price_sale,
        status: data.status,
        detail: data.detail
      };
      setProducts([
        ...products,
        obj
      ])
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }


  // Cập nhật product 
  const onHandleUpdate = (id, updateProduct) => {
    const newProducts = products.map(product => (
      product.id == id ? updateProduct : product
    ));
    apiProducts.update(id, updateProduct);
    setProducts(newProducts);
  }

  // addToCart
  const AddToCart = (id, quantity = 1) => {
    const check = cart.every((item) => {
      return item.id !== id;
    });
    if (check) {
      const dataCart = products.find(product => product.id == id);
      dataCart.quantity = quantity
      const newCart = [...cart, dataCart];
      setCart(newCart);
      swal("Thông Báo", "Thêm Sản Phẩm Vào Giỏ Hàng Thành Công!", "success");
      localStorage["shopping-cart-items"] = JSON.stringify(newCart);
    } else {
      cart.forEach((element) => {
        if (element.id == id) {
          element.quantity++;
        }
      });
      setCart(cart);
      swal("Thông Báo", "Cộng Thêm Số Lượng Sản Phẩm Vào Giỏ Hàng Thành Công!", "success");
      localStorage["shopping-cart-items"] = JSON.stringify(cart);
    }
  }
  // list Cart
  useEffect(() => {
    let shoppingCartItems = [];
    if (localStorage["shopping-cart-items"] != null) {
      shoppingCartItems = JSON.parse(
        localStorage["shopping-cart-items"].toString()
      );
    }
    setCart(shoppingCartItems);
  }, []);

  // Xóa Cart 
  const RemoveCart = (id) => {
    cart.forEach((element, index) => {
      if (element.id == id) {
        cart.splice(index, 1)
      }
    });
    setCart([...cart]);
    swal("Thông Báo", "Xóa Sản Phẩm Khỏi Giỏ Hàng Thành Công!", "success");
    localStorage["shopping-cart-items"] = JSON.stringify(cart);
  }
  // updateCart
  const onUpcart = (id) => {
    cart.forEach((item) => {
      if (item.id == id) {
        item.quantity++;
      }
    })
    setCart([...cart]);
    localStorage["shopping-cart-items"] = JSON.stringify(cart);
  }
  const onDownUpdate = (id) => {
    cart.forEach((item) => {
      if (item.quantity == 1) {
      } else if (item.id == id) {
        item.quantity--;
      }
    })
    setCart([...cart]);
    localStorage["shopping-cart-items"] = JSON.stringify(cart);
  }
  return (
    <div className="App">
      <Routers
        // products
        products={products}
        onRemove={onHandleRemove}
        onAdd={onHandleAdd}
        onUpdate={onHandleUpdate}
        // categories
        categories={categories}
        onAddCate={onHandleAddCategory}
        onRemoveCate={onHandleRemoveCate}
        onUpdateCate={onHandleUpdateCate}
        AddCart={AddToCart}
        dataCart={cart}
        RemoveCart={RemoveCart}
        onHandleDown={onDownUpdate}
        onHandleUp={onUpcart}
        blog={blog}
        contact={contact}
        onRemoveContact={onRemoveContact}
        onAddBlog={AddNewBlog}
        RemoveBlog={RemoveBlog}
      />
    </div>
  )

}
export default App;