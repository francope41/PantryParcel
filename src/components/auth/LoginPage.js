import React from 'react';
import { Amplify, Auth } from 'aws-amplify';
import { Authenticator,View,Image,useTheme,Text,ThemeProvider,Theme } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import '../../App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import awsExports from '../../aws-exports';
import { useNavigate } from 'react-router-dom';
import './Login.css'

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
            value: '#f4f4f4', // Light grey background
          },
          secondary: {
            value: '#ffffff', // White background
          },
        },
        font: {
          interactive: {
            value: '#333333', // Dark grey font color for better readability
          },
        },
        brand: {
          primary: {
            '10': '#e6f7f2', // Light green
            '80': '#4CAF50', // Primary green color
            '90': '#43a047', // Slightly darker green for hover effects
            '100': '#388e3c', // Even darker green for active or selected states
          },
        },
      },
      components: {
        tabs: {
          item: {
            _focus: {
              color: {
                value: '#bac34e', // White text when focused
              },
            },
            _hover: {
              color: {
                value: '#000000', // Light green text on hover
              },
            },
            _active: {
              color: {
                value: '#bac34e', // White text when active
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
            <main style={{ background: 'linear-gradient(to bottom, rgba(186, 195, 78, 0.5) 0%, white 100%)' }}>
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
