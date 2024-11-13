const { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendEmailVerification } = require("../config/firebaseClient");

class authController {
  async registerUser(req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(422).json({
        email: "Email is required",
        password: "Password is required",
      });
    }

    if (password.length < 8) {
      return res.status(422).json({
        password: "Password min 8 characters ",
      });
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await sendEmailVerification(userCredential.user);
      res.status(201).json({ message: "Verification email sent! User created successfully!" });
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        return res.status(400).json({ message: "Email is already registered" });
      }
      console.error(error);
      res.status(500).json({ error: error.message || "An error occurred while registering user" });
    }
  }

  async loginUser(req, res) {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(422).json({
        email: "Email is required",
        password: "Password is required",
      });
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      if (!user.emailVerified) {
        return res.status(403).json({ error: "Please verify your email before login" });
      }

      const idToken = await user.getIdToken();
      res.cookie("access_token", idToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
      });

      res.status(200).json({
        message: "Login successfully",
        user: {
          email: user.email,
          uid: user.uid,
          emailVerified: user.emailVerified,
        },
      });
    } catch (error) {
      if (error.code === "auth/invalid-credential") {
        return res.status(400).json({ error: "Invalid email or password format" });
      }
      console.error("Error when login:", error);
      res.status(500).json({ error: error.message || "An error occurred while logging in" });
    }
  }

  async logoutUser(req, res) {
    try {
      await signOut(auth);
      res.clearCookie("access_token");
      res.status(200).json({ message: "Logout successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

module.exports = new authController();
