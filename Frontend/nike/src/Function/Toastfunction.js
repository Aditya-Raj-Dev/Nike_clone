export const setToast = (toast, title,description, status, duration = 2000) => {
  toast({
      title,
      description,
      status,
      duration,
      isClosable: true,
      position: 'top'
  });
};