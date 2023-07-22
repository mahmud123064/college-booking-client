import { useContext } from "react";

import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const GoogleLogin = () => {

    const { googleSignIn } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/"

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Your have successfully Logged In',
                    showConfirmButton: false,
                    timer: 1500
                })

                    .then(res => res.json())
                    .then(() => {

                        navigate(from, { replace: true })

                    })
            })
    }

    return (
        <div>
            <div className="divider">OR</div>
            <div>
                <button onClick={handleGoogleSignIn} className="btn btn-secondary btn-block">GOOGLE</button>
            </div>
        </div>
    );
};

export default GoogleLogin;