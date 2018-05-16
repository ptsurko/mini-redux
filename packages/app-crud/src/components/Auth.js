
import React from 'react';
import { withUser } from '@ptsurko/mini-components';

export default withUser()(({ user }) => (
  <div>
    Current user: {user.name}
  </div>
));

// export default compose(
//   withUser(),
// )(Auth);
