const NearFooter = () => {
    return (
        <section className="pt-32 px-12 lg:pt-8 h-2/3 md:h-4/6 w-screen bg-bottom font-extrabold bg-[url('https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-masthead.jpg')] bg-no-repeat">
            <div className=" text-center md:mt-28 "> 
                <h1 className="text-white text-2xl md:max-w-3xl md:mx-auto md:text-5xl md:text-center mb-6   ">Ready to get started? Sign up now!</h1>
            </div>
            <div className="flex items-center justify-center gap-4  ">
            <input type="text" className="md:w-[480px] lg:w-[600px] px-4 py-5 w-80 bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:outline-none" placeholder="Email Address" ></input>
            <button className=" px-4 bg-blue-500 py-6 rounded-lg text-white  font-bold" >Submit</button>
            </div>
        </section>
    );
}
export default NearFooter;