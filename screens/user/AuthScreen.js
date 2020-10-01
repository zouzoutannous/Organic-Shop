import React, {useState, useReducer, useCallback, useEffect} from 'react';
import {Alert,ActivityIndicator,View, ScrollView, KeyboardAvoidingView, StyleSheet, TextInput, Button} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {useDispatch} from 'react-redux';

import Card from '../../components/UI/Card';
import Colors from '../../constants/Colors';
import Input from '../../components/UI/Input';
import * as authActions from '../../store/actions/auth';

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const formReducer = (state, action) => {
    if (action.type === FORM_INPUT_UPDATE) {
      const updatedValues = {
        ...state.inputValues,
        [action.input]: action.value
      };
      const updatedValidities = {
        ...state.inputValidities,
        [action.input]: action.isValid
      };
      let updatedFormIsValid = true;
      for (const key in updatedValidities) {
        updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
      }
      return {
        formIsValid: updatedFormIsValid,
        inputValidities: updatedValidities,
        inputValues: updatedValues
      };
    }
    return state;
  };

const AuthScreen = props => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const [isSignup, setIsSignup] = useState(false);
    const dispatch = useDispatch();


    const [formState, dispatchFormState] = useReducer(formReducer, {
        inputValues: {
          email: '',
          password: ''
        },
        inputValidities: {
          email: false,
          password:false
        },
        formIsValid: false
      });

      useEffect(() => {
            if(error) {
                Alert.alert('An error occured!', error, [{ text: 'Ok'}]);
            }
      },[error]);

    const authHandler =  async () => {
        let action;
        if(isSignup) {
           action =  authActions.signup(
                formState.inputValues.email ,
                formState.inputValues.password
                );
            
        } else {
            action = authActions.login(
                formState.inputValues.email,
                formState.inputValues.password
                );
            }
            setError(null);
            setIsLoading(true);
            try {
                await dispatch(action);
                props.navigation.navigate('Shop');
            } catch(err){
                setError(err.message);
                setIsLoading(false);
            }
            
    };

    const inputChangeHandler = useCallback(
        (inputIdentifier, inputValue, inputValidity) => {
          dispatchFormState({
            type: FORM_INPUT_UPDATE,
            value: inputValue,
            isValid: inputValidity,
            input: inputIdentifier
          });
        },
        [dispatchFormState]
      );
    return (
    <KeyboardAvoidingView 
     behavior='padding' 
     keyboardVerticalOffset={50}
    style={styles.screen}
    >  
    <LinearGradient colors={[Colors.primary,'white']} style={styles.gradient}> 
       <Card style={styles.authContainer}>
            <ScrollView>
                <Input 
                id='email' 
                label='E-mail' 
                keyboardType='email-address' 
                required 
                email
                errorText="Please enter a valid email address!"
                autoCapitalize='none'
                onInputChange={inputChangeHandler} 
                placeholder="Example: xyz123@domain.com"
                initialValue=""
                
                
                />
                <Input
                id='password' 
                label='Password' 
                keyboardType='default' 
                secureTextEntry
                required
                minLength={5}
                autoCapitalize='none'
                errorText="Please enter a valid password!"
                onInputChange ={inputChangeHandler} 
                initialValue=""
                placeholder="Example: xyz123"
                
                
                />
                <View style={styles.buttons}>
                    {isLoading ? ( 
                    <ActivityIndicator size='small' color={Colors.primary} /> 
                    ) : (
                    <Button 
                    title={ isSignup ? "Sign Up" : "Login" }
                    color={Colors.primary}
                    onPress={authHandler} />
                     )}
                </View>
                <View style={styles.buttons}>
                    <Button title={`Switch to ${isSignup ? 'Login' : 'Sign Up'}`}
                     color={Colors.primary}
                      onPress={() => {
                          setIsSignup(prevState => !prevState);
                      }}
                       />
                </View>
                
            </ScrollView>
        </Card>
        </LinearGradient>
    </KeyboardAvoidingView>
    );
};

AuthScreen.navigationOptions={
    headerTitle: 'Grandma\'s Goods'
}

const styles = StyleSheet.create({
    screen: {
        flex:1
        
    },
    gradient:{
        width: '100%',
        height: '100%',
        justifyContent:'center',
        alignItems:'center'

    },
    authContainer:{
        width: '80%',
        maxWidth: 400,
        maxHeight: 400,
        padding: 20
    },
    buttons: {
        marginTop: 10
        

    }
});

export default AuthScreen;