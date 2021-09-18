import React from 'react'

interface SkeletonWrapperProps {
  children: React.ReactNode;
  loading: boolean;
  skeleton: React.ReactNode;
}

const SkeletonWrapper = ({
  children,
  loading,
  skeleton,
}: SkeletonWrapperProps) => <>{loading ? skeleton : children}</>

export default SkeletonWrapper
