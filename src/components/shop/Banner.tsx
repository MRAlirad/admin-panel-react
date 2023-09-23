import Button from "../Button";

const Banner = () => {
	return(
        <div className="banner bg-[url('/src/assets/pics/ShopBanner.png')] bg-cover bg-no-repeat bg-left h-56 w-full rounded-4" >
            <div className="desc w-1/2 h-full grid gap-4 ">
                <h3 className="title">

                </h3>
                <p className="desc">

                </p>
                <div className="action-box">
                    <Button type="white" text="ببین و بگرد" onClick={()=> {}} />
                </div>
            </div>
        </div>
    );
};

export default Banner;
