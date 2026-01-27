import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import CustomCursor from './components/CustomCursor'
import Loader from './components/Loader'
import Navbar from './layouts/Navbar'
import Footer from './layouts/Footer'
import CartSidebar from './layouts/CartSidebar'
import { useState, useEffect, Suspense, lazy } from 'react'
const Home = lazy(() => import('./pages/Home'))
const Ingredients = lazy(() => import('./pages/Ingredients'))
const Shop = lazy(() => import('./pages/Shop'))
const SkinQuiz = lazy(() => import('./pages/SkinQuiz'))
const ProductDetails = lazy(() => import('./pages/ProductDetails'))
const About = lazy(() => import('./pages/About'))
const Account = lazy(() => import('./pages/Account'))
const Wishlist = lazy(() => import('./pages/Wishlist'))
const Journal = lazy(() => import('./pages/Journal'))
const JournalDetail = lazy(() => import('./pages/JournalDetail'))
const Checkout = lazy(() => import('./pages/Checkout'))
const Contact = lazy(() => import('./pages/Contact'))
const Shipping = lazy(() => import('./pages/Shipping'))

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <AnimatePresence>
        {loading && <Loader key="loader" />}
      </AnimatePresence>
      <CustomCursor />
      <Navbar />
      <CartSidebar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/about" element={<About />} />
              <Route path="/ingredients" element={<Ingredients />} />
              <Route path="/quiz" element={<SkinQuiz />} />
              <Route path="/account" element={<Account />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/journal" element={<Journal />} />
              <Route path="/journal/:id" element={<JournalDetail />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/shipping" element={<Shipping />} />
            </Routes>
          </Suspense>
        </AnimatePresence>
      </main>
      <Footer />
    </div >
  )
}

export default App
