import React, { createContext, useContext, useState, useEffect } from 'react';

// Create Order Context
const OrderContext = createContext();

// Custom hook to use order context
export const useOrders = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrders must be used within an OrderProvider');
  }
  return context;
};

// Order Provider Component
export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  // Load orders from localStorage on mount
  useEffect(() => {
    const savedOrders = localStorage.getItem('orders');
    if (savedOrders) {
      try {
        const parsedOrders = JSON.parse(savedOrders);
        setOrders(parsedOrders);
      } catch (error) {
        console.error('Error loading orders from localStorage:', error);
      }
    }
  }, []);

  // Save orders to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders));
  }, [orders]);

  // Generate order ID
  const generateOrderId = () => {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 1000);
    return `ORD-${timestamp}-${random}`;
  };

  // Create new order
  const createOrder = (cartItems, orderDetails = {}) => {
    const newOrder = {
      id: generateOrderId(),
      date: new Date().toISOString(),
      status: 'processing',
      items: cartItems.map(item => ({
        id: item.id,
        name: item.name,
        image: item.image,
        price: item.discount 
          ? item.price * (1 - item.discount / 100) 
          : item.price,
        quantity: item.quantity,
        brand: item.brand,
        category: item.category
      })),
      total: cartItems.reduce((total, item) => {
        const price = item.discount 
          ? item.price * (1 - item.discount / 100) 
          : item.price;
        return total + (price * item.quantity);
      }, 0),
      itemCount: cartItems.reduce((total, item) => total + item.quantity, 0),
      shippingAddress: orderDetails.shippingAddress || 'Default Address',
      paymentMethod: orderDetails.paymentMethod || 'Credit Card',
      trackingNumber: `TRK${Date.now()}`,
      estimatedDelivery: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString() // 7 days from now
    };

    setOrders(prevOrders => [newOrder, ...prevOrders]);
    return newOrder;
  };

  // Update order status
  const updateOrderStatus = (orderId, status) => {
    setOrders(prevOrders =>
      prevOrders.map(order =>
        order.id === orderId ? { ...order, status } : order
      )
    );
  };

  // Get order by ID
  const getOrderById = (orderId) => {
    return orders.find(order => order.id === orderId);
  };

  // Get orders by status
  const getOrdersByStatus = (status) => {
    return orders.filter(order => order.status === status);
  };

  const value = {
    orders,
    createOrder,
    updateOrderStatus,
    getOrderById,
    getOrdersByStatus
  };

  return (
    <OrderContext.Provider value={value}>
      {children}
    </OrderContext.Provider>
  );
};