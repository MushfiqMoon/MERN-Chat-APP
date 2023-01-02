import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes/Routes';

function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={routes} />
    </ChakraProvider>
  );
}

export default App;
