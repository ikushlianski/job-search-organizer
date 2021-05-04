import React from 'react';

interface Props {
  text: string;
}

export const GlobalInfoText: React.FC<Props> = ({ text }) => {
  return <div className="GlobalInfoText">{text}</div>;
};
