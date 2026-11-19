import './App.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ProductListingPage from './pages/ProductListingPage/ProductListingPage';
import ProductView from './pages/ProductView/ProductView';
import MessagePage from './pages/MessagePage/MessagePage';
import CartPage from './pages/CartPage/CartPage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import OrderSuccessPage from './pages/OrderSuccessPage/OrderSuccessPage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/SignupPage/SignupPage';
import SignupFormPage from './pages/SignupFormPage/SignupFormPage';
import MyInfoPage from './pages/MyInfoPage/MyInfoPage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  
  return( 
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/produtos" element={<ProductListingPage />} />
      <Route path="/products" element={<ProductListingPage />} />
      <Route path="/product/:id" element={<ProductView />} />
      <Route path="/carrinho" element={<CartPage />} />

      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/compra-realizada" element={<OrderSuccessPage />} />

      <Route path="/categorias" element={<MessagePage title="Categorias" text="Esta página ainda está em construção. Por favor, volte mais tarde." />} 
      />
      <Route path="/meus-pedidos" element={<MessagePage title="Meus Pedidos" text="Esta página ainda está em construção. Por favor, volte mais tarde." />} 
      />

      <Route path="/login" element={<LoginPage />} />
      <Route path="/cadastro" element={<SignupPage />} />
      <Route path="/cadastro/formulario" element={<SignupFormPage />} />
      <Route path="/esqueci-minha-senha" element={<MessagePage title="Esqueci minha senha" text="A recuperação de senha ainda está em construção. Por favor, volte mais tarde." />}
      />

      <Route path="/minhas-informacoes" element={<PrivateRoute><MyInfoPage /></PrivateRoute>} />
      <Route path="/metodos-de-pagamento" element={<PrivateRoute><MessagePage title="Métodos de Pagamento" text="Esta página ainda está em construção. Por favor, volte mais tarde." /></PrivateRoute>}
      />

      <Route path="*" element={<MessagePage title="Página não encontrada" text="O endereço acessado não existe." />}
      />
    </Routes>
  </BrowserRouter>
  );

  
}

export default App;
