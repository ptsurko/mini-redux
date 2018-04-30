
const setDisplayName = (name) => (Component) => {
  Component.displayName = name;
  return Component;
};

export default setDisplayName;
