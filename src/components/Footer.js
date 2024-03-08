// FooterExample.js
import React, { useContext } from 'react';
import { Box, Footer, ResponsiveContext, Text, Anchor } from 'grommet';

function goNav(url) {
  window.parent.location.href = url;
}

const AppFooter = () => {
  const size = useContext(ResponsiveContext);
  const year = new Date().getFullYear();

  const footerLinks = [
    { label: 'Privacy', 
      onClick: () => { goNav('https://www.hpe.com/us/en/legal/privacy.html') } 
    },
    { label: 'Terms of Use', 
      onClick: () => { goNav('https://www.hpe.com/us/en/about/legal/terms-of-use.html') } 
    },
    { label: 'Ad Choices & Cookies', 
      onClick: () => { goNav('https://www.hpe.com/us/en/legal/privacy.html#datacollection') } 
    },
    { label: 'Do Not Sell or Share My Personal Information',
      onClick: () => { goNav('https://www.hpe.com/us/en/privacy/personal-information.html') } 
    },
  ];
  return (
    <Footer
      background="background-contrast"
      border={{ color: "#cecac9", size: "small", side: "top" }}
      height="30px"
      margin={{ top: "5px", bottom: "10px" }}
      elevation="small"
      direction={!['xsmall', 'small'].includes(size) ? 'row' : 'column'}
      align={!['xsmall', 'small'].includes(size) ? 'center' : undefined}
      pad={{ horizontal: 'medium', vertical: 'small' }}
      fill="horizontal"
    >
      <Box
        direction={!['xsmall', 'small'].includes(size) ? 'row' : 'column'}
        align={!['xsmall', 'small'].includes(size) ? 'center' : undefined}
        gap="xsmall"
      >
        <Text size="small" color="#757575">
          &copy; {year} Hewlett Packard Enterprise Development LP
        </Text>
      </Box>
      <Box
        direction="row"
        align={!['xsmall', 'small'].includes(size) ? 'center' : undefined}
        gap="small"
        wrap
      >
        {footerLinks.map(link => (
          <Anchor size="small" weight="light" color="#757575" 
              label={link.label}
              onClick={link.onClick} />
        ))}
      </Box>
    </Footer>
  );
};

export { AppFooter as Footer };