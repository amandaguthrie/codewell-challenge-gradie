import React from 'react';
import { ChakraProvider, Flex, Link, Text } from '@chakra-ui/react';
import LoginStack from './components/LoginStack';
import gradieTheme from './theme/gradie-theme';

function App() {
  const pink = '#E07FA2';
  const orange = '#E59B85';
  const yellow = '#F2D5A5';
  const light = '#FEFCF8';
  const backgroundBefore = {
    content: '""',
    display: 'block',
    position: 'absolute',
    'z-index': 0,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    maskImage: `linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)`,
    bgGradient: `linear(to-r, ${pink} 0%, ${light} 100%)`,
  };

  return (
    <ChakraProvider theme={gradieTheme}>
      <Flex direction='column'
            alignItems='center'
            justifyContent='space-around'
            gap='2'
            minH='100vh'
            w='100%'
            marginX={{ base: 0 }}
            marginY={{ base: 0 }}
            paddingX={{ base: 0, sm: '20vw', lg: '20vw' }}
            paddingY={{ base: 0, sm: '20vw', lg: '10vh' }}
            bgGradient={`linear(to-r, ${orange}  0%, ${yellow} 100%)`}
            _before={backgroundBefore}
            zIndex='1'
      >
        <LoginStack />
        <Flex zIndex='2'>
          <Text>
            Challenge by <Link href='https://www.codewell.cc/challenges/gradie-sign-up-page--608ac420650dff001599e8ec'
                               fontWeight='bold'
                               textDecoration='underline'
                               isExternal={true}
          >
            Codewell
          </Link>. Coded by <Link href='https://github.com/amandaguthrie'
                                  fontWeight='bold'
                                  textDecoration='underline'
                                  isExternal={true}>
            Amanda Guthrie</Link>.
          </Text>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
