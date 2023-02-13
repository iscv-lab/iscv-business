import { useQuery } from '@apollo/client';
import { LoadingContainer } from '@components/Loading';
import { GetBusinessByUser, getBusinessByUser } from '@graphql/Business';
import { ToastContainer } from '@iscv/toast';
import { connect } from '@redux/reducers/auth';
import { RootState } from '@redux/store';
import { ethers } from 'ethers';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet, RouterProvider, matchRoutes, useLocation, useMatch } from 'react-router-dom';
import { router, routes } from './routes';
import { redirect, useNavigate } from 'react-router-dom';

function App() {
  const provider: ethers.providers.Web3Provider = useSelector(
    (state: RootState) => state.auth.provider
  );

  const account = useSelector((state: RootState) => state.auth.account);
  const dispatch = useDispatch();
  const { loading, error, data, refetch, subscribeToMore, client } = useQuery<GetBusinessByUser>(
    getBusinessByUser,
    {
      variables: { user: account },
      notifyOnNetworkStatusChange: true,
    }
  );

  useEffect(() => {
    (provider.provider as any).on('accountsChanged', async () => {
      await dispatch<any>(connect({ provider }));
      refetch();
    });
    (provider.provider as any).on('chainChanged', async () => {
      await dispatch<any>(connect({ provider }));
      refetch();
    });
    return () => {
      (provider.provider as any).removeListener('accountsChanged', () => {});
      (provider.provider as any).removeListener('chainChanged', () => {});
    };
  }, []);
  useEffect(() => {
    (async () => {
      await dispatch<any>(connect({ provider }));
    })();
  }, []);
  const location = useLocation();
  const route = matchRoutes(routes, location);
  const routeName = route?.at(route.length - 1)?.route.name;
  const navigate = useNavigate();
  useEffect(() => {
    if (!loading && data?.businessByUser == null && routeName !== 'register') {
      navigate({ pathname: 'register' });
    }
  }, [data?.businessByUser]);
  return (
    <div className="App">
      <LoadingContainer></LoadingContainer>
      <ToastContainer></ToastContainer>
      {!loading && <Outlet></Outlet>}
    </div>
  );
}

export default App;
