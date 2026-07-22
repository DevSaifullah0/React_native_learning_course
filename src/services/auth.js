import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendEmailVerification,
    sendPasswordResetEmail as firebaseSendPasswordResetEmail
} from '@react-native-firebase/auth';

// ======================= REGISTER =======================

export const registerUser = async (email, password) => {
    try {
        const auth = getAuth();

        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password,
        );

        await sendEmailVerification(userCredential.user);

        return userCredential.user;
    } catch (error) {
        let errorMessage;

        switch (error.code) {
            case 'auth/email-already-in-use':
                errorMessage =
                    'This email is already in use. Please use a different email.';
                break;

            case 'auth/invalid-email':
                errorMessage = 'Invalid email address.';
                break;

            case 'auth/weak-password':
                errorMessage =
                    'Password is too weak. Please use at least 6 characters.';
                break;

            default:
                errorMessage = error.message;
        }

        throw new Error(errorMessage);
    }
};

// ======================= LOGIN =======================

export const LoginUser = async (email, password) => {
    try {
        const auth = getAuth();

        const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password,
        );

        const user = userCredential.user;

        // Refresh latest user info
        // await user.reload();
        return user;
    } catch (error) {
        let errorMessage;

        switch (error.code) {
            case 'auth/user-not-found':
                errorMessage = 'No user found with this email.';
                break;

            case 'auth/wrong-password':
                errorMessage = 'Wrong password.';
                break;

            case 'auth/invalid-email':
                errorMessage = 'Invalid email address.';
                break;

            case 'auth/invalid-credential':
                errorMessage = 'Invalid email or password.';
                break;

            case 'auth/too-many-requests':
                errorMessage =
                    'Too many attempts. Please try again later.';
                break;

            default:
                errorMessage = error.message;
        }

        throw new Error(errorMessage);
    };
};


export const sendPasswordResetEmail = async (email) => {
  try {
    const auth = getAuth();

    await firebaseSendPasswordResetEmail(auth, email);

    return true;
  } catch (error) {
    let errorMessage;

    switch (error.code) {
      case 'auth/user-not-found':
        errorMessage = 'No user found with this email.';
        break;

      case 'auth/invalid-email':
        errorMessage = 'Invalid email address.';
        break;

      case 'auth/missing-email':
        errorMessage = 'Please enter your email.';
        break;

      case 'auth/too-many-requests':
        errorMessage = 'Too many requests. Please try again later.';
        break;

      default:
        errorMessage = error.message;
        break;
    }

    throw new Error(errorMessage);
  }
};