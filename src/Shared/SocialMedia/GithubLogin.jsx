// import { GithubAuthProvider } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const GithubLogin = () => {

    const {githubSignIn } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/"


    const handleGithubSignIn= () =>{
        githubSignIn()
        .then(result => {
            const logUser = result.user
            console.log(logUser);
            navigate(from, { replace: true });

        })
        .catch(error => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text:` ${error.message}`,
            })
        })

    }


    return (
        <div>
            <div className="divider">OR</div>
            <div>
                <button onClick={handleGithubSignIn} className="btn btn-neutral btn-block">Github</button>
            </div>
        </div>
    );
};

export default GithubLogin;