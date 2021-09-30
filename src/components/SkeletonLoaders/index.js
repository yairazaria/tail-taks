import React, { Fragment } from 'react';

const SkeletonLoaders = () => {
  const skeleton = (
    <div class="flex flex-col border-gray-300 shadow rounded-md  max-w-sm w-full mx-auto">
      <div class="animate-pulse space-x-4">
        <div class="bg-gray-400 h-32 w-full"></div>
        <div class="space-y-4 p-3">
          <div class="space-y-2 ">
            <div class="h-3 bg-gray-400 rounded w-11/12"></div>
            <div class="h-3 bg-gray-400 rounded w-5/6"></div>
          </div>
          <div class="h-3 bg-gray-300 rounded w-3/4"></div>
        </div>
      </div>
    </div>
  );

  const arrayOfSkeletonLoaders = Array(6).fill(skeleton);

  return <Fragment>{arrayOfSkeletonLoaders.map((skeletonLoader) => skeletonLoader)}</Fragment>;
};

export default SkeletonLoaders;
