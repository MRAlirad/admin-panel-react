import LoginForm from "../components/log-in/LoginForm";

const LogIn = () => {
	return (
		<div className="login-page grid grid-cols-2 w-screen h-screen overflow-hidden">
			<div className="auth-form flex items-center justify-center bg-ghostWhite">
				<LoginForm />
			</div>
			<div className="banner flex flex-col items-center justify-center gap-10 h-full bg-[url('/src/assets/pics/AuthBanner.jpeg')] bg-cover bg-no-repeat bg-center">
				<div className="img-box w-40 h-40">
					<img
						src="/src/assets/pics/Auth.png"
						alt="auth"
					/>
				</div>
				<p className="company-name text-white text-3xl">MRA Company</p>
				<div className="slogan flex flex-col gap-1 items-center text-white border border-solid border-[#FFFFFF33] rounded-2xl py-4 px-[7%]">
					<span className="text-xs">لورم ایپسوم متن ساختگی با تولید سادگی</span>
					<span className="text-2xl">lorem ipsum.com</span>
				</div>
			</div>
		</div>
	);
};

export default LogIn;
