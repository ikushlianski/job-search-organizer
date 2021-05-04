import React from 'react';

import './menu-item.scss';

interface Props {
  children: React.ReactElement | string;
  onClick?: () => void;
}

export const MenuItem: React.FC<Props> = ({ children }): React.ReactElement => {
  return <div className="MenuItem">{children}</div>;
};
