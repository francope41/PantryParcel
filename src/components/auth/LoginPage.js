import React from 'react';
import { Amplify, Auth } from 'aws-amplify';
import { Authenticator,View,Image,useTheme,Text,ThemeProvider,Theme } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import '../../App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import awsExports from '../../aws-exports';
import { useNavigate } from 'react-router-dom';

Amplify.configure(awsExports);

function LoginPage() {
  const navigate = useNavigate();

  const { tokens } = useTheme();

  const theme = {
    name: 'Auth Theme',
    tokens: {
      colors: {
        background: {
          primary: {
            value: tokens.colors.neutral['90'].value,
          },
          secondary: {
            value: tokens.colors.neutral['100'].value,
          },
        },
        font: {
          interactive: {
            value: tokens.colors.white.value,
          },
        },
        brand: {
          primary: {
            '10': tokens.colors.teal['100'],
            '80': tokens.colors.teal['40'],
            '90': tokens.colors.teal['20'],
            '100': tokens.colors.teal['10'],
          },
        },
      },
      components: {
        tabs: {
          item: {
            _focus: {
              color: {
                value: tokens.colors.white.value,
              },
            },
            _hover: {
              color: {
                value: tokens.colors.yellow['80'].value,
              },
            },
            _active: {
              color: {
                value: tokens.colors.white.value,
              },
            },
          },
        },
      },
    },
  };

  const components = {
    Header(){
      return (
        <View textAlign={"center"} padding={tokens.space.large}>
          <Image
            alt='Pantry Parcel'
            src='/img/logo.png'
          />
        </View>
      )
    },
    Footer() {
      return(
        <View textAlign={"center"} padding={tokens.space.large}>
          <Text color={tokens.colors.neutral[80]}>
            &copy; 2023 Parcel Inc
          </Text>
        </View>
      )
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Authenticator loginMechanisms={['email']} components={components}>
        {({ signOut, user }) => {
          if (user) {
            navigate('/');
          }
          return (
            <main>
              <h1>Hello {user && user.username}</h1>
              <button onClick={signOut}>Sign out</button>
            </main>
          );
        }}
      </Authenticator>
    </ThemeProvider>
  );
}

export default LoginPage;
