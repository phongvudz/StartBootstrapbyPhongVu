const Section = () =>{
    return(
        <section className=" bg-gray-100">
                <div className="text-center py-28 ">
                    <h1 className="text-2xl mb-12 lg:text-3xl">What people are saying...</h1>
                    <div className="lg:flex lg:flex-row items-center justify-center"> 
                    {/*avatar 1*/}
                    <div className="flex flex-col items-center px-3 mb-12  lg:mb-0">
                        <img className="w-48 h-48 rounded-full mb-4" src="https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-1.jpg" alt="avatar"/>
                        <div>
                            <h1 className="text-xl mb-2">Margaret E.</h1>
                            <p className="max-w-sm text-sm ">"This is fantastic! Thanks so much guys!"</p>
                        </div>
                    </div>
                    {/*avatar 2*/}
                    <div className="flex flex-col items-center px-3 mb-12 lg:mb-0">
                        <img className="w-48 h-48 rounded-full mb-4" src="https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-2.jpg" alt="avatar"/>
                        <div>
                            <h1 className="text-xl mb-2">Fred S.</h1>
                            <p className="max-w-sm text-sm ">"Bootstrap is amazing. I've been using it to create lots of super nice landing pages."</p>
                        </div>
                    </div>
                    {/*avatar 3*/}
                    <div className="flex flex-col items-center px-3 mb-12 lg:mb-0 ">
                        <img className="w-48 h-48 rounded-full mb-4" src="https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-3.jpg" alt="avatar"/>
                        <div>
                            <h1 className="text-xl mb-2">Sarah W.</h1>
                            <p className="max-w-sm text-sm ">"Thanks so much for making these free resources available to us!"</p>
                        </div>
                    </div>
                    </div>
                </div>
        </section>
    );
}
export default Section;