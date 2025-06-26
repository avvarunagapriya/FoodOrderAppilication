"use client"

import { createContext, useContext, useState, useEffect } from "react"

const CartContext = createContext()

export function useCart() {
  return useContext(CartContext)
}

export function CartProvider({ children }) {
  // Initialize cart from localStorage if available
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cart")
    return savedCart ? JSON.parse(savedCart) : []
  })

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems))
  }, [cartItems])

  // Add item to cart
  const addToCart = (item) => {
    setCartItems((prevItems) => {
      // Check if item already exists in cart
      const existingItemIndex = prevItems.findIndex((cartItem) => cartItem.id === item.id)

      if (existingItemIndex >= 0) {
        // Item exists, update quantity
        const updatedItems = [...prevItems]
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + item.quantity,
        }
        return updatedItems
      } else {
        // Item doesn't exist, add it
        return [...prevItems, item]
      }
    })
  }

  // Remove item from cart
  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex((item) => item.id === itemId)

      if (existingItemIndex >= 0) {
        const updatedItems = [...prevItems]

        // If quantity is 1, remove the item completely
        if (updatedItems[existingItemIndex].quantity === 1) {
          return updatedItems.filter((item) => item.id !== itemId)
        } else {
          // Otherwise, decrease quantity by 1
          updatedItems[existingItemIndex] = {
            ...updatedItems[existingItemIndex],
            quantity: updatedItems[existingItemIndex].quantity - 1,
          }
          return updatedItems
        }
      }

      return prevItems
    })
  }

  // Update item quantity directly
  const updateItemQuantity = (itemId, quantity) => {
    if (quantity <= 0) {
      // Remove item if quantity is 0 or less
      setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId))
    } else {
      // Update quantity
      setCartItems((prevItems) => prevItems.map((item) => (item.id === itemId ? { ...item, quantity } : item)))
    }
  }

  // Clear cart
  const clearCart = () => {
    setCartItems([])
  }

  // Get item quantity
  const getItemQuantity = (itemId) => {
    const item = cartItems.find((item) => item.id === itemId)
    return item ? item.quantity : 0
  }

  // Calculate cart total
  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateItemQuantity,
    clearCart,
    getItemQuantity,
    getCartTotal,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

