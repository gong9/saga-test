export const take = (actionType) => {
  return {
    type: 'take',
    actionType
  };
}

export const put = (actionType) => {
  return {
    type: 'put',
    actionType
  };
}