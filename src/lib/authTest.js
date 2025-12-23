// Simple helper to run register/login tests from a client component or console
import { register, login, verify } from "./apiAuth";

export async function runRegisterTest() {
  try {
    const testUser = {
      fullName: "Test Account",
      email: "testaccount@example.com",
      password: "Password@123",
      passwordConfirmation: "Password@123",
      phoneNumber: "0501231100",
      countryCode: "971",
    };

    const res = await register(testUser);
    console.log("register result", res);
    return res;
  } catch (err) {
    console.error("register test error", err);
    throw err;
  }
}

export async function runLoginTest() {
  try {
    const creds = { email: "client1@test.com", password: "Password@123" };
    const res = await login(creds);
    console.log("login result", res);
    return res;
  } catch (err) {
    console.error("login test error", err);
    throw err;
  }
}

export async function runVerifyTest(code = "123455") {
  try {
    // Ensure token exists in localStorage (axios interceptor will use it)
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (!token)
        console.warn(
          "No token in localStorage — verify may fail without Authorization header"
        );
    }

    const res = await verify(undefined, code);
    console.log("verify result", res);
    return res;
  } catch (err) {
    console.error("verify test error", err);
    throw err;
  }
}
