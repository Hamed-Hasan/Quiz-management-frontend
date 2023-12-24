/* eslint-disable react-hooks/rules-of-hooks */

const getCategorys = () => {
  const { data, isLoading } = { data: {}, isLoading: false };

  if (isLoading) return [];

  return data;
};

export default getCategorys;
