import React from 'react';
import Skeleton from 'react-loading-skeleton';

const SkeletonLoader: React.FC<{
  width?: any | number;
  height?: string | number;
  style?: React.CSSProperties;
  baseColor?: string;
}> = ({ width, height, style, baseColor }) => {
  return <Skeleton width={width} height={height} style={style} baseColor={baseColor} />;
};

export default SkeletonLoader;

