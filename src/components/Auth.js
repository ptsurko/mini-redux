
import React from 'react';
// import compose from '../mini-redux/compose';
import { withUser } from '../mini-components/User';

export default withUser(({ user }) => (
  <div>
    Current user: {user.name}
  </div>
));

// export default compose(
//   withUser(),
// )(Auth);
