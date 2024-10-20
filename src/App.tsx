import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';
import { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import mockData from './data.json';
import Home from './pages/Home';
import Places from './pages/Places';
import { useAppDispatch } from './redux/app/hooks';
import { setPlaces } from './redux/reducers/appSlice';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/places',
    element: <Places />
  }
]);

export default function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const mock = new AxiosMockAdapter(axios);
    mock.onGet('https://api.example.com/places').reply(200, mockData);

    const fetchPlaces = async () => {
      try {
        const response = await axios.get('https://api.example.com/places');
        dispatch(setPlaces(response.data));
      } catch (error) {
        console.error('Error fetching places:', error);
      }
    };

    fetchPlaces();

    return () => {
      mock.restore();
    };
  }, [dispatch]);

  return <RouterProvider router={router} />;
}
