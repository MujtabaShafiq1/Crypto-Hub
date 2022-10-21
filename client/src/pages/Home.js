import { useSelector } from "react-redux"

const Home = () => {

    const user = useSelector((state) => state.auth.user)

    const logoutHandler = async () => {
        window.open(`http://localhost:8000/auth/logout`, "_self");
    }

    return (
        <>
            <button onClick={logoutHandler}>logout</button>
            <h1>{user.name}</h1>
            <h2>{user.userId}</h2>
            <h2>{user.provider}</h2>
            <img src={user.photo} alt="" />
        </>
    )
}

export default Home