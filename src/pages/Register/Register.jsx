import { useContext } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const location = useLocation();

  console.log(location);

  const { createUser, updateUserProfile, setUser, setLoading, googleLogin } =
    useContext(AuthContext);

  const onSubmit = async (data) => {
    console.table(data);

    const { name, email, password } = data;
    createUser(email, password)
      .then((result) => {
        toast.success("Your Registration is successful.........");
        updateUserProfile(name)
          .then(() => {
            setUser(result.user);
            setLoading(false);
            toast.success("Update is saved successfully......");
            // navigate("/home");
            navigate(location.state ? location.state : "/");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleGoogleLogIn = () => {
    googleLogin()
      // eslint-disable-next-line no-unused-vars
      .then((result) => {
        toast.success("Log in successfully.........");
        navigate(location.state ? location.state : "/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      className="flex w-full max-w-md mx-auto overflow-hidden bg-white 
    rounded-lg shadow-lg lg:max-w-7xl h-[500px] mt-[50px] lg:mt-[250px]"
    >
      <div
        className="hidden bg-cover lg:block lg:w-1/2"
        style={{ backgroundImage: "url('/register.jpg')" }}
      ></div>

      <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
        <Helmet>
          <title>Register</title>
        </Helmet>
        <p className="mt-3 text-xl text-center text-black mb-4 font-playfair">
          Welcome back! Register To Continue
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-[20px]">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full"
              required
              {...register("name")}
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full"
              {...register("email")}
              required
            />
          </div>
          <div className="">
            <input
              type="password"
              placeholder="Type Your Password"
              className="input input-bordered w-full"
              required
              {...register("password", {
                pattern:
                  /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\\[\]{};':"\\|,.<>\\/?]).{6,}$/,
              })}
            />
          </div>
          {errors.password ? (
            <span className="text-red-700">
              Password should have an Uppercase letter, a special character and
              at least 6 character
            </span>
          ) : (
            ""
          )}
          <div>
            <input
              type="submit"
              value="Register"
              className="input input-bordered w-full bg-black text-white text-[22px] font-semibold font-playfair cursor-pointer"
            />
          </div>
        </form>
        <div className="space-x-5 text-center mt-2">
          <span className="text-[16px] text-[#131313] font-inter">
            Already Have an Account?
          </span>
          <span
            onClick={() => navigate("/login")}
            className="text-[18px] text-blue-600 font-semibold underline font-playfair cursor-pointer"
          >
            Log in
          </span>
        </div>
        <div
          onClick={handleGoogleLogIn}
          className="mt-10 flex items-center bg-black text-white text-[18px] font-semibold font-playfair cursor-pointer space-x-4  lg:space-x-[100px] py-2 rounded-lg justify-start md:justify-center lg:justify-start"
        >
          <FaGoogle size={24} className="ml-[30px] lg:ml-[70px]" />
          <button>Continue With Google</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
