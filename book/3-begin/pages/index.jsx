import PropTypes from 'prop-types';

import Head from 'next/head';

import { getUserApiMethod } from '../lib/api/public.ts';

const propTypes = {
  user: PropTypes.shape({
    displayName: PropTypes.string,
    email: PropTypes.string.isRequired,
  }),
};

const defaultProps = {
  user: 'niklas',
};

const Index = ({ user }) => (
  <div style={{ padding: '10px 45px' }}>
    <Head>
      <title>Dashboard</title>
      <meta name="description" content="This is a description of the Index page" />
    </Head>
    <p>Content on Index page</p>
    <p>
      Email:&nbsp;
      {user.email}
    </p>
  </div>
);

Index.getInitialProps = async (ctx) => {
  const user = await getUserApiMethod();

  console.log(user);
  return { user: ctx.query.user };
};

Index.propTypes = propTypes;
Index.defaultProps = defaultProps;

export default Index;
