import React, { useState, useContext, createContext, useEffect, useRef, Component } from "react";
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";

/* ---------------------- Cart Context ---------------------- */
export const CartContext = createContext(null);

/* ---------------------- Banner ---------------------- */
class Banner extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "#ffcc00",
          padding: "15px",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        🎉✨ 40% OFF on all Laptops! Free shipping on selected products!! ✨🎉
      </div>
    );
  }
}

/* ---------------------- Chat ---------------------- */
class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      serverUrl: "http://localhost:5173/",
      category: "laptops",
      isOpen: true,
    };
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleServerChange = this.handleServerChange.bind(this);
    this.toggleChat = this.toggleChat.bind(this);
  }

  setupConnection() {
    console.log(
      `🔗 Connecting to ${this.state.serverUrl} for ${this.state.category}...`
    );
  }

  destroyConnection() {
    console.log("❌ Disconnected from server");
  }

  componentDidMount() {
    this.setupConnection();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.category !== this.state.category ||
      prevState.serverUrl !== this.state.serverUrl
    ) {
      this.destroyConnection();
      this.setupConnection();
    }
  }

  componentWillUnmount() {
    this.destroyConnection();
  }

  handleCategoryChange(event) {
    this.setState({ category: event.target.value });
  }

  handleServerChange(event) {
    this.setState({ serverUrl: event.target.value });
  }

  toggleChat() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    if (!this.state.isOpen) {
      return (
        <button
          onClick={this.toggleChat}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            padding: "10px 20px",
            borderRadius: "10px",
            background: "teal",
            color: "white",
            border: "none",
          }}
        >
          Open Chat
        </button>
      );
    }

    return (
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          width: "250px",
          border: "1px solid gray",
          borderRadius: "10px",
          padding: "10px",
          backgroundColor: "#f9f9f9",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        }}
      >
        <h3>User Chat</h3>
        <label>Category: </label>
        <select value={this.state.category} onChange={this.handleCategoryChange}>
          <option value="laptops">Laptops</option>
          <option value="desktops">Desktops</option>
          <option value="smartphones">Smartphones</option>
          <option value="accessories">Accessories</option>
        </select>
        <br />
        <br />
        <label>Server URL: </label>
        <input
          type="text"
          value={this.state.serverUrl}
          onChange={this.handleServerChange}
          style={{ width: "100%" }}
        />
        <br />
        <br />
        <button
          onClick={this.toggleChat}
          style={{
            padding: "8px 15px",
            borderRadius: "8px",
            background: "#ee2400",
            color: "white",
            border: "none",
          }}
        >
          Close Chat
        </button>
      </div>
    );
  }
}

/* ---------------------- Product ---------------------- */
function Product({ id, name, price, initialStock }) {
  const [stock, setStock] = useState(initialStock);
  const { cartTotal, setCartTotal } = useContext(CartContext);

  const handleBuy = () => {
    if (stock > 0) {
      setStock(stock - 1);
      setCartTotal(cartTotal + 1);
    }
  };

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        margin: "15px",
        maxWidth: "250px",
        textAlign: "center",
        borderRadius: "15px",
      }}
    >
      <h3 style={{ fontSize: "20px" }}>{name}</h3>
      <p>Price: ₹{price}</p>
      <p>
        Stock:{" "}
        {stock > 0 ? stock : <span style={{ color: "red" }}>Out of Stock</span>}
      </p>
      <button onClick={handleBuy} disabled={stock === 0} style={{ fontSize: "16px" }}>
        Buy
      </button>
      <nav style={{ paddingTop: "5px" }}>
        <Link
          to={`/product/${id}`}
          style={{
            textDecoration: "none",
            color: "#007bff",
            fontSize: "15px",
            fontWeight: "500",
            transition: "color 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.color = "#0056b3")}
          onMouseOut={(e) => (e.target.style.color = "#007bff")}
        >
          View Product Details
        </Link>
      </nav>
    </div>
  );
}

/* ---------------------- ProductDetails ---------------------- */
function ProductDetails() {
  const { prodid } = useParams();

  const products = [
    {
      id: 1,
      name: "MacBook Air M2",
      price: 114900,
      description: "Lightweight and powerful laptop with M2 chip.",
      manufacturer: "Apple",
    },
    {
      id: 2,
      name: "iMac 24-inch",
      price: 134900,
      description: "24-inch iMac with stunning Retina display.",
      manufacturer: "Apple",
    },
    {
      id: 3,
      name: "MacBook Pro 14-inch M3",
      price: 169900,
      description: "High-performance MacBook Pro with M3 chip.",
      manufacturer: "Apple",
    },
  ];

  const product = products.find((p) => p.id === parseInt(prodid));

  if (!product) {
    return <h2 style={{ textAlign: "center" }}>Product not found</h2>;
  }

  return (
    <div
      style={{
        border: "2px solid black",
        padding: "20px",
        margin: "20px auto",
        maxWidth: "400px",
        textAlign: "center",
        borderRadius: "15px",
      }}
    >
      <h2>{product.name}</h2>
      <p>Price: ₹{product.price}</p>
      <p>{product.description}</p>
      <p>Manufacturer: {product.manufacturer}</p>
    </div>
  );
}

/* ---------------------- ShoppingCart ---------------------- */
function ShoppingCart() {
  const { cartTotal, setCartTotal } = useContext(CartContext);
  const [message, setMessage] = useState("");
  const [showButton, setShowButton] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const cardRef = useRef(null);
  const cvvRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage("Shop for products and add to cart!");
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (cartTotal > 0) {
      setMessage("");
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }, [cartTotal]);

  const handleCheckout = () => {
    setShowForm(true);
  };

  const handlePayment = (e) => {
    e.preventDefault();
    const cardNumber = cardRef.current.value;
    const cvv = cvvRef.current.value;
    if (cardNumber && cvv) {
      const last4 = cardNumber.slice(-4);
      alert(`Payment has been initiated for card ending with ${last4}`);
      setShowForm(false);
      setCartTotal(0);
      setMessage("Shop for products and add to cart!");
    } else {
      alert("Please enter both Card Number and CVV");
    }
  };

  return (
    <div
      style={{
        border: "2px solid gray",
        width: "250px",
        padding: "10px",
        position: "absolute",
        right: "10px",
        top: "80px",
        borderRadius: "10px",
        textAlign: "center",
        background: "#f9f9f9",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      }}
    >
      <h3>Shopping Cart</h3>
      <p>Total items: {cartTotal}</p>
      {message && <p>{message}</p>}
      {showButton && !showForm && (
        <button
          onClick={handleCheckout}
          style={{
            fontSize: "16px",
            marginTop: "10px",
            padding: "6px 12px",
            borderRadius: "8px",
            background: "teal",
            color: "white",
            border: "none",
          }}
        >
          Check Out Cart
        </button>
      )}
      {showForm && (
        <form onSubmit={handlePayment} style={{ marginTop: "10px" }}>
          <div>
            <input
              type="number"
              placeholder="Card Number"
              ref={cardRef}
              style={{ width: "100%", marginBottom: "8px" }}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="CVV"
              ref={cvvRef}
              style={{ width: "100%", marginBottom: "8px" }}
            />
          </div>
          <button
            type="submit"
            style={{
              padding: "6px 12px",
              borderRadius: "8px",
              background: "green",
              color: "white",
              border: "none",
              width: "100%",
            }}
          >
            Pay
          </button>
        </form>
      )}
    </div>
  );
}

/* ---------------------- Main Practical ---------------------- */
function Practical() {
  const [cartTotal, setCartTotal] = useState(0);
  const val = { cartTotal, setCartTotal };

  const products = [
    { id: 1, name: "MacBook Air M2", price: 114900, stock: 5 },
    { id: 2, name: "iMac 24-inch", price: 134900, stock: 3 },
    { id: 3, name: "MacBook Pro 14-inch M3", price: 169900, stock: 2 },
  ];

  return (
    <BrowserRouter>
      <CartContext.Provider value={val}>
        <Banner />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <h2 style={{ textAlign: "center", fontSize: "35px" }}>Product Panel</h2>
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  {products.map((p) => (
                    <Product
                      key={p.id}
                      id={p.id}
                      name={p.name}
                      price={p.price}
                      initialStock={p.stock}
                    />
                  ))}
                </div>
                <ShoppingCart />
                <Chat />
              </div>
            }
          />
          <Route path="/product/:prodid" element={<ProductDetails />} />
        </Routes>
      </CartContext.Provider>
    </BrowserRouter>
  );
}

export default Practical;
