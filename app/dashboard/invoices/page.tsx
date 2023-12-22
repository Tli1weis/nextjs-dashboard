import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';
interface Props {
  children?: ReactNode;
}
const Invoices: FC<Props> = (props) => {
  return <p>Invoices Page</p>;
};
export default memo(Invoices);
