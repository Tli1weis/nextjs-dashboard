import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';
interface Props {
  children?: ReactNode;
}
const Customers: FC<Props> = (props) => {
  return <p>Customers Page</p>;
};
export default memo(Customers);
