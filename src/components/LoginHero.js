import React from 'react';
import { Flex, Heading, Text } from '@chakra-ui/react';

const LoginHero = () => {

  const colorLightGray = '#91BDD0';

  return (
    <Flex minW={'100%'}
          direction={'column'}
          alignItems='center'
          alignContent='center'
          grow
          boxSizing='content-box'
          paddingBottom={{ base: 'calc((100vw * 443)/552)', sm: 'calc((60vw * 443)/552)', lg: '0' }}
    >
      <Heading as='h1' color={'whiteAlpha.900'} fontSize='5xl'>Gradie</Heading>
      <Text color={colorLightGray} size='lg'>Beautiful gradients in seconds.</Text>
    </Flex>
  );
};

export default LoginHero;