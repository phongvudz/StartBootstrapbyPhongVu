const SideBar = () => {
  return (
    <div className="">
      {/*Container1*/}
      <div className="flex flex-col justify-center lg:flex lg:flex-row">
        <img  className="lg:w-[505px] xl:w-[635px] 2xl:w-[950px]"src="https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-showcase-1.jpg"></img>
        <div className=" p-12 2xl:py-64 2xl:max-w-5xl lg:p-32 border-transparent shadow-2xl border-2  ">
          <h1 className="text-2xl mb-3">Fully Responsive Design</h1>
          <p className="text-gray-400">
            When you use a theme created by Start Bootstrap, you know that the
            theme will look great on any device, whether it's a phone, tablet,
            or desktop the page will behave responsively!
          </p>
        </div>
      </div>
      {/*Container2*/}
      <div className="flex flex-col justify-center lg:flex lg:flex-row-reverse">
        <img  className="lg:w-[502px] xl:w-[630px] 2xl:w-full"src="https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-showcase-2.jpg"></img>
        <div className="p-12 2xl:py-64 2xl:max-w-4xl border-transparent shadow-2xl border-2 ">
          <h1 className="text-2xl mb-3">Updated For Bootstrap 5</h1>
          <p className="text-gray-400">
          Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!
          </p>
        </div>
      </div>
      {/*Container3*/}
      <div className="flex flex-col justify-center lg:flex lg:flex-row">
        <img  className="lg:w-[505px] xl:w-[635px] 2xl:w-[950px]" src="https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-showcase-3.jpg"></img>
        <div className="p-12 border-transparent 2xl:py-64 2xl:max-w-5xl shadow-2xl border-2 ">
          <h1 className="text-2xl mb-3">Fully Responsive Design</h1>
          <p className="text-gray-400">
          Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!
          </p>
        </div>
      </div>
    </div>
  );
};
export default SideBar;
