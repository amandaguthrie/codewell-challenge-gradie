import React from 'react';
import { Card, CardBody, CardHeader } from '@chakra-ui/react';
import LoginHero from './LoginHero';
import LoginForm from './LoginForm';

const LoginStack = () => {
  const colorDarkGray = '#193544';
  return (<Card direction={{ base: 'column', sm: 'column', md: 'column', lg: 'row', xl: 'row' }}
                size={{ base: 'md', lg: 'lg' }}
                minWidth={{ base: '100%' }}
                width={{ base: '100%', sm: 'unset', lg: '100%' }}
                minHeight={{ base: '100vh', sm: 'auto' }}
                padding={0}
                borderRadius={{ base: '0', lg: 'var(--card-radius)' }}
                borderBottomRadius={{ base: 'var(--card-radius)' }}
                variant='unstyled'
                overflow='hidden'>
    <CardHeader bgColor={colorDarkGray}
                backgroundClip='border-box'
                paddingX={'5rem'}
                paddingTop={['5rem']}
                paddingBottom={0}
                minHeight={{
                  base: 'calc((60vw * 443)/552)', sm: 'calc((60vw * 443)/552)', lg: 'calc((40vw * 443)/552)',
                }}
                minWidth={{ base: '100%', lg: '50%' }}
                maxWidth={{ base: '100%', lg: '50%' }}
                bgImage={`url("/assets/iPhone Mockup.png")`}
                bgSize='contain'
                bgRepeat='no-repeat'
                bgPosition='bottom center'
    >
      <LoginHero />
    </CardHeader>
    <CardBody
      paddingX={'5rem'}
      paddingY={'5rem'}
      maxWidth={{ base: '100%', lg: '50%' }}
      borderColor='#BBBBBB'
      borderWidth='1px'
      borderTopLeftRadius={{ base: 'var(--card-radius)', lg: '0' }}
      borderTopRightRadius={{ base: '0', lg: 'var(--card-radius)' }}
      borderBottomLeftRadius={{ base: 'var(--card-radius)', lg: '0' }}
      borderBottomRightRadius={{ base: 'var(--card-radius)' }}
    >
      <LoginForm />
    </CardBody>

  </Card>);
};

LoginStack.propTypes = {};

export default LoginStack;