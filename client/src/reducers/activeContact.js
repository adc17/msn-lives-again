const activeContact = (state = null, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_CONTACT':
      return action.number;
    default:
      return state;
  }
};

export default activeContact;
