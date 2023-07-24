import React, { useState } from 'react';
import { Button, Checkbox, FormControl, Heading, Link, Stack, Text } from '@chakra-ui/react';
import FormInput from './common/FormInput';
import FormLabel from './common/FormLabel';

function LoginForm() {
  const colorCheckbox = '#D2D2D2';
  const colorButtonLink = '#193544';

  const [formData, setFormData] = useState({
    email: '', password: '',
  });

  const { email, password } = formData;

  const onChange = (evt) => {
    setFormData((prevState) => ({
      ...prevState, [evt.target.id]: [evt.target.value],
    }));
  };

  return (<Stack as='form'
                 direction={'column'}
                 gap='2rem'
  >
    <Heading as='h1' fontSize='5xl'>Login</Heading>
    <FormControl>
      <FormLabel htmlFor='email' labelText='Email' />
      <FormInput type='email'
                 id='email'
                 name='email'
                 value={email}
                 onChange={onChange}
                 placeholder='john@example.com'
      />
    </FormControl>
    <FormControl>
      <FormLabel htmlFor='password' labelText='Password' />
      <FormInput type='password'
                 id='password'
                 name='password'
                 value={password}
                 onChange={onChange}
                 placeholder='At least 8 characters'
      />
    </FormControl>
    <Checkbox size='lg'
              variant=''
              alignItems='start'
              colorScheme='gray'
              iconColor={colorCheckbox}
              spacing={'1rem'}
              fontSize='xl'
              letterSpacing={'0.05em'}
              isRequired>
      <Text lineHeight='1.25'>By creating an account, you agree to the <Link as='a' href='#' fontWeight='bold'
                                                                             textDecoration='underline'
                                                                             color={colorButtonLink}>
        Terms & Conditions
      </Link>.
      </Text>
    </Checkbox>
    <Button size='lg' colorScheme='gray' bg={colorButtonLink} color='gray.50' variant='' fontSize='xl'>Create an
      Account</Button>

  </Stack>);
}

export default LoginForm;