import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../../../theme';
import MaterialIcons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const SignUp = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.MainContainer}>
      {/* ==> Status Bar */}
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />

      {/* ==> Back Icon */}
      <TouchableOpacity
        style={styles.BackIcon}
        onPress={() => navigation.goBack()}>
        <MaterialIcons
          name="arrow-back"
          color={COLORS.primaryWhiteHex}
          size={25}
        />
      </TouchableOpacity>

      {/* ==> Signup Heading */}
      <View style={styles.SignUpTextContainer}>
        <Text style={styles.SignUpText}>Sign up with Email</Text>
        <Text style={styles.SignUpTextSubText}>
          Get chatting with friends and family today by signing up for our chat
          app!
        </Text>
      </View>

      {/* ==> Signup Form */}
      <View style={styles.FormContainer}>
        {/* ==> Name Input */}
        <View style={styles.NameInputContainer}>
          <Text style={styles.NameText}>Your name</Text>
          <TextInput style={styles.NameTextInput} />
        </View>

        {/* ==> Name Input */}
        <View style={styles.NameInputContainer}>
          <Text style={styles.NameText}>Your email</Text>
          <TextInput style={styles.NameTextInput} />
        </View>

        {/* ==> Name Input */}
        <View style={styles.NameInputContainer}>
          <Text style={styles.NameText}>Password</Text>
          <TextInput style={styles.NameTextInput} />
        </View>

        {/* ==> Name Input */}
        <View style={styles.NameInputContainer}>
          <Text style={styles.NameText}>Confirm password</Text>
          <TextInput style={styles.NameTextInput} />
        </View>
      </View>

      <View style={styles.CreateAccContainer}>
        <TouchableOpacity style={styles.CreateAccountButton}>
          <Text style={styles.CreateAccountButton}>Create an account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor: COLORS.primaryDarkBlue,
    flex: 1,
    color: COLORS.primaryWhiteHex,
    overflow: 'scroll',
  },
  BackIcon: {
    paddingVertical: SPACING.space_24,
    paddingHorizontal: SPACING.space_16,
  },
  SignUpTextContainer: {
    marginTop: SPACING.space_16 * 2,
    paddingHorizontal: SPACING.space_16,
  },
  SignUpText: {
    color: COLORS.primaryYellow,
    fontFamily: FONTFAMILY.poppins_semibold,
    textAlign: 'center',
    fontSize: FONTSIZE.size_20,
  },
  SignUpTextSubText: {
    color: COLORS.secondaryLightGreyHex,
    fontFamily: FONTFAMILY.poppins_medium,
    paddingTop: SPACING.space_10,
    fontSize: FONTSIZE.size_14,
    textAlign: 'center',
  },
  FormContainer: {
    marginTop: SPACING.space_18,
    marginHorizontal: SPACING.space_18,
  },
  NameInputContainer: {
    marginTop: SPACING.space_30,
  },
  NameText: {
    color: COLORS.primaryYellow,
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_16,
  },
  NameTextInput: {
    borderColor: COLORS.primaryOrangeHex,
    borderBottomWidth: 1,
    color: COLORS.primaryWhiteHex,
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_16,
    paddingTop: 0,
  },

  CreateAccContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: SPACING.space_30,
    paddingHorizontal: SPACING.space_18,
  },

  CreateAccountButton: {
    width: '100%',
    backgroundColor: COLORS.primaryOrangeHex,
    paddingVertical: SPACING.space_8,
    borderRadius: SPACING.space_15,
    overflow: 'hidden',
    textAlign: 'center',
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
  },
});

export default SignUp;
