const Slogan = () => {
    return (
        <section className="pt-12 px-4 h-2/4 md:h-4/6 w-screen bg-bottom font-extrabold bg-[url('https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-masthead.jpg')] bg-no-repeat">
            <div className=" text-center"> 
                <h1 className="text-white text-3xl  md:text-5xl lg:mt-12 mb-12 xl:max-w-lg xl:mx-auto">Generate more leads with a professional landing page!</h1>
            </div>
            <div className="flex items-center justify-center gap-4 lg:mt-28 xl:mt-0 ">
            <input type="text" className=" px-4 py-5 xl:w-[500px] md:w-[600px] lg:w-[720px] w-80 bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:outline-none" placeholder="Email Address" ></input>
            <button className="px-4 py-6 lg:px-8 md:mr-4 bg-blue-500 rounded-xl text-white" >Submit</button>
            </div>
        </section>
    );
}
export default Slogan;