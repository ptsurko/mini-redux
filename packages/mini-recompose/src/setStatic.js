const setStatic = (key, value) => (Component) => {
  Component[key] = value;
  return Component;
};

export default setStatic;
