/*import type { NextPage } from "next";
import { useDispatch, useSelector } from "react-redux";
import { userInfoActions } from "../store/user-slice";
import jsCookie from "js-cookie";
import EnteringBox from "../components/entering/EnteringBox";
import { IUser } from "../lib/types/user";
import axios from "axios";
import { getError } from "../utilities/error";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IUserInfoRootState } from "../lib/types/user";
const SignUp: NextPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");
  const { redirect } = router.query;
  const userInfo = useSelector(
    (state: IUserInfoRootState) => state.userInfo.userInformation
  );
  useEffect(() => {
    if (userInfo) {
      router.push((redirect as string) || "/");
    }
  }, [userInfo, redirect, router]);
  async function signUpHandler(user: IUser) {
    const { name, email, password } = user;
    try {
      const { data } = await axios.post("/api/users/register", {
        name,
        email,
        password,
      });
      dispatch(userInfoActions.userLogin(data));
      jsCookie.set("userInfo", JSON.stringify(data));
      router.push("/");
    } catch (err: any) {
      /* sanity.io is boycott for the people from Iran so I set cookies for whom don't use VPN in Iran*/
    /* if (err.response.data.status == 500) {
        dispatch(userInfoActions.userLogin(user));
        jsCookie.set("userInfo", JSON.stringify(user));
      }
      setErrorMessage(getError(err));
      console.log(getError(err));
      router.push("/");
    }
  }
  return (
    <EnteringBox
      title="signUp"
      submitHandler={signUpHandler}
      errorMessage={errorMessage}
    />
  );
};


export default SignUp;

*/


/*
import { NextPage } from "next";
import { useDispatch, useSelector } from "react-redux";
import { userInfoActions } from "../store/user-slice";
import jsCookie from "js-cookie";
import EnteringBox from "../components/entering/EnteringBox";
import axios from "axios";
import { getError } from "../utilities/error";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IUser } from "../lib/types/user";
import { IUserInfoRootState } from "../lib/types/user";

const SignUp: NextPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<string>("");
  const { redirect } = router.query;
  const userInfo = useSelector(
    (state: IUserInfoRootState) => state.userInfo.userInformation
  );

  useEffect(() => {
    if (userInfo) {
      router.push((redirect as string) || "/");
    }
  }, [userInfo, redirect, router]);

  const signUpHandler = async (user: IUser): Promise<void> => {
    const { name, email, password } = user;
    try {
      const { data } = await axios.post("/api/users/register", {
        name,
        email,
        password,
      });
      dispatch(userInfoActions.userLogin(data));
      jsCookie.set("userInfo", JSON.stringify(data));
      router.push("/");
    } catch (err: { response: { data: { status: number } } }) {
      if (err.response?.data?.status === 401) {
        setErrorMessage("Email already exists");
      } else {
        setErrorMessage(getError(err));
      }
      dispatch(userInfoActions.userLogin(user));
      jsCookie.set("userInfo", JSON.stringify(user));
      router.push("/");
    }
  };

  return (
    <EnteringBox
      title="signUp"
      submitHandler={signUpHandler}
      errorMessage={errorMessage}
    />
  );
};

export default SignUp;
*/



/*
import { NextPage } from "next";
import { useDispatch, useSelector } from "react-redux";
import { userInfoActions } from "../store/user-slice";
import jsCookie from "js-cookie";
import EnteringBox from "../components/entering/EnteringBox";
import axios from "axios";
import { getError } from "../utilities/error";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IUser } from "../lib/types/user";
import { IUserInfoRootState } from "../lib/types/user";
import sanityClient from '@sanity/client';

const SignUp: NextPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<string>("");
  const { redirect } = router.query;
  const userInfo = useSelector(
    (state: IUserInfoRootState) => state.userInfo.userInformation
  );

  const client = sanityClient({
    projectId: 'your-project-id',
    dataset: 'your-dataset-name',
    useCdn: true // false if you want to enable preview mode
  });

  useEffect(() => {
    if (userInfo) {
      router.push((redirect as string) || "/");
    }
  }, [userInfo, redirect, router]);

  const signUpHandler = async (user: IUser): Promise<void> => {
    const { name, email, password } = user;
    try {
      // Create a new user document in Sanity.io
      const newUser = await client.create({
        _type: 'user',
        name,
        email,
        password
      });
      dispatch(userInfoActions.userLogin(newUser));
      jsCookie.set("userInfo", JSON.stringify(newUser));
      router.push("/");
    } catch (err: any) {
      setErrorMessage(getError(err));
      dispatch(userInfoActions.userLogin(user));
      jsCookie.set("userInfo", JSON.stringify(user));
      router.push("/");
    }
  };

  return (
    <EnteringBox
      title="signUp"
      submitHandler={signUpHandler}
      errorMessage={errorMessage}
    />
  );
};

export default SignUp;
*/





import { NextPage } from "next";
import { useDispatch, useSelector } from "react-redux";
import { userInfoActions } from "../store/user-slice";
import jsCookie from "js-cookie";
import EnteringBox from "../components/entering/EnteringBox";
import axios from "axios";
import { getError } from "../utilities/error";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IUser } from "../lib/types/user";
import { IUserInfoRootState } from "../lib/types/user";
import sanityClient from "@sanity/client";

const SignUp: NextPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<string>("");
  const { redirect } = router.query;
  const userInfo = useSelector(
    (state: IUserInfoRootState) => state.userInfo.userInformation
  );

  const client = sanityClient({
    projectId: "2e8vlhhu",
    dataset: "production",
    useCdn: true, // false if you want to enable preview mode
  });

  useEffect(() => {
    if (userInfo) {
      router.push((redirect as string) || "/");
    }
  }, [userInfo, redirect, router]);

  async function signUpHandler(user: IUser): Promise<void> {
    const { name, email, password } = user;
    try {
      // Create a new user document in Sanity.io
      const newUser = await client.create({
        _type: "user",
        name,
        email,
        password,
      });
      dispatch(userInfoActions.userLogin(newUser));
      jsCookie.set("userInfo", JSON.stringify(newUser));
      router.push("/");
    } catch (err: any) {
      if (err.response?.data?.status === 401) {
        setErrorMessage("Email already exists");
      } else {
        setErrorMessage(getError(err));
      }
      dispatch(userInfoActions.userLogin(user));
      jsCookie.set("userInfo", JSON.stringify(user));
      router.push("/");
    }
  }

  return (
    <EnteringBox
      title="signUp"
      submitHandler={signUpHandler}
      errorMessage={errorMessage}
    />
  );
};

export default SignUp;

