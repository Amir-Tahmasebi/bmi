import { Suspense } from 'react';

import LoadingScreen from 'src/components/loading-screen/loading-screen';

import OrderSection, { fetchOrderByID } from 'src/sections/order';

export const metadata = {
  title: 'Order Page',
  description: 'Order description',
};

const Order = async ({ params }: any) => {
  const { id } = params;

  const order = await fetchOrderByID(id);

  return (
    <Suspense fallback={<LoadingScreen />}>
      <OrderSection order={order} />
    </Suspense>
  );
};

export default Order;
