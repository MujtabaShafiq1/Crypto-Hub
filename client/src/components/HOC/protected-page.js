import { selectUserState } from "../../store/auth-slice";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const ProtectedPage = (WrappedComponent) => {
  const Wrapper = (props) => {
    const router = useRouter();
    const username = useSelector(selectUserState).username;

    useEffect(() => {
      if (!username) {
        router.push("/login", null, { shallow: true });
      }
    }, [username]);

    return username ? <WrappedComponent {...props} /> : <h1>Loading...</h1>;
  };

  return Wrapper;
};

export default ProtectedPage;
