// import Head from 'next/head';
// import { Box } from '@chakra-ui/react';

// import Footer from './Footer';
// import Navbar from './Navbar';

// export default function Layout({ children }) {
//   return (
//     <>
//       <Head>
//         <title>Real Estate</title>
//       </Head>
//       <Box maxWidth='1280px' m='auto'>
//         <header>
//           <Navbar />
//         </header>
//         <main>{children}</main>
//         <footer>
//           <Footer />
//         </footer>
//       </Box>
//     </>
//   );
// }

import React from 'react';

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        {/* Your header content */}
      </header>
      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;
