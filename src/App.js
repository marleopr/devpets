import './components/styled.css';
import { Router } from './routes/Router';
import Footer from './components/Footer';
import styled from 'styled-components';
import Menu from './components/Menu';

function App() {
  return (
    <div>
      <Menu />
      <Main >
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
          <Router />
        </div >
        <Footer />
      </Main >
    </div>
  );
}

export default App;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  box-sizing: border-box;
  /* border: solid #0077ff; */
  /* padding: 5px; */
  /* background: rgb(33, 33, 33);
  background: radial-gradient(circle, rgba(33,33,33,1) 0%, rgba(1,21,34,1) 100%); */
  background-color: #FAD961;
  background-image: linear-gradient(90deg, #FAD961 0%, #F76B1C 100%);

`