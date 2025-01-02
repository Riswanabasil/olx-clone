import React, { createContext, useContext, useState, useEffect } from 'react';

type ProductContextType = {
  products: any[];
  search: string;
  menu: string;
  setSearch: (search: string) => void;
  setMenu: (menu: string) => void;
  fetchProducts: () => void;
};

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<any[]>([]);
  const [search, setSearch] = useState<string>('');
  const [menu, setMenu] = useState<string>('');

  const fetchProducts = () => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, search, menu, setSearch, setMenu, fetchProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProductContext must be used within a ProductProvider');
  }
  return context;
};
