import React from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../../../theme';
import Logo from '../../../assets/images/Logo.png';
import Google from '../../../assets/images/Google.png';
import {useNavigation} from '@react-navigation/native';

const WelcomeScreen = () => {
  const nativation = useNavigation();

  const navigateToSignup = () => {
    nativation.navigate('sign-up-screen');
  };

  return (
    <View style={styles.MainContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      {/* ==> Logo */}
      <View style={styles.LogoContainer}>
        <Image source={Logo} />
      </View>

      {/* ==> Slogan */}
      <View style={styles.SloganContainer}>
        <Text style={styles.SloganText}>Connect</Text>
        <Text style={styles.SloganText}>friends</Text>
        <Text style={styles.SloganText}>easily &</Text>
        <Text style={styles.SloganText}>quickly</Text>
      </View>

      {/* ==> Sub Text */}
      <View style={styles.SubtextContainer}>
        <Text style={styles.Subtext}>
          Our chat app is the perfect way to stay connected with friends and
          family.
        </Text>
      </View>

      {/* ==> Login with google */}
      <TouchableOpacity style={styles.GoogleContainer}>
        <View style={styles.Google}>
          <Image
            source={Google}
            style={{
              width: 30,
              height: 30,
            }}
          />
        </View>
      </TouchableOpacity>

      <View style={styles.OrContainer}>
        <View style={styles.Or1} />
        <Text style={styles.Or2}>OR</Text>
        <View style={styles.Or3} />
      </View>
      {/* ==> Sign up with with mail */}
      <TouchableOpacity
        style={styles.SignupContainer}
        onPress={navigateToSignup}>
        <Text style={styles.SignupText}>Sign up with mail</Text>
      </TouchableOpacity>

      {/* ==> Login */}
      <View style={styles.ExistingAccount}>
        <Text style={styles.ExistingAccountText}>Existing account?</Text>
        <TouchableOpacity>
          <Text style={styles.LogIn}>Log in</Text>
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
  LogoContainer: {
    flexDirection: 'row',
    width: 'autos',
    justifyContent: 'center',
    paddingVertical: SPACING.space_24,
  },
  SloganContainer: {
    paddingHorizontal: SPACING.space_24,
    paddingBottom: SPACING.space_10,
  },
  SloganText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    color: COLORS.primaryYellow,
    fontSize: FONTSIZE.size_28 * 2,
    lineHeight: 90,
  },
  SubtextContainer: {
    paddingHorizontal: SPACING.space_18,
  },
  Subtext: {
    color: COLORS.secondaryLightGreyHex,
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_16,
  },
  GoogleContainer: {
    paddingVertical: SPACING.space_18,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  Google: {
    borderWidth: 1,
    borderColor: COLORS.secondaryLightGreyHex,
    borderRadius: 100,
    padding: 3,
  },

  OrContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // width: '100%',
    marginLeft: SPACING.space_20,
    marginRight: SPACING.space_20,
  },

  Or1: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.secondaryDarkGreyHex,
  },

  Or2: {
    color: COLORS.secondaryLightGreyHex,
    fontFamily: FONTFAMILY.poppins_semibold,
    paddingHorizontal: SPACING.space_12,
    fontSize: FONTSIZE.size_14,
  },

  Or3: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.secondaryDarkGreyHex,
  },

  SignupContainer: {
    backgroundColor: COLORS.primaryOrangeHex,
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: SPACING.space_20,
    marginVertical: SPACING.space_18,
    paddingVertical: SPACING.space_10,
    borderRadius: BORDERRADIUS.radius_10,
  },

  SignupText: {
    color: COLORS.primaryWhiteHex,
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_16,
  },

  ExistingAccount: {
    marginHorizontal: SPACING.space_20,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 5,
    paddingVertical: SPACING.space_18,
  },

  ExistingAccountText: {
    fontFamily: FONTFAMILY.poppins_medium,
    color: COLORS.secondaryLightGreyHex,
  },

  LogIn: {
    fontFamily: FONTFAMILY.poppins_semibold,
    color: COLORS.primaryWhiteHex,
  },
});

export default WelcomeScreen;
