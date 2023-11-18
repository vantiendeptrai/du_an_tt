import { Carousel } from "antd";

const Banner = () => {
  return (
    <>
      <div className="bg-white rounded-xl my-10">
        <div className="flex flex-row justify-between items-center">
          <div className="w-full md:w-3/4 md:pl-5 p-5">
            <Carousel autoplay draggable>
              <img src="https://cdn0.fahasa.com/media/magentothem/banner7/AnSinh_840x320.png" className="rounded-xl" />

              <img src="https://cdn0.fahasa.com/media/wysiwyg/Thang-11-2023/Fahasa_saleT3_Tuan2_LDP_Mainbanner_web.jpg" className="rounded-xl" />

              <img src="https://cdn0.fahasa.com/media/magentothem/banner7/NCCThienLongT1123_BannerSlide_840x320.jpg" className="rounded-xl" />

              <img src="https://cdn0.fahasa.com/media/magentothem/banner7/PopmartT1023_Banner_Slide_840x320_1.jpg" className="rounded-xl" />

              <img src="https://cdn0.fahasa.com/media/magentothem/banner7/Manga_mainbanner_T11_Slide_840x320.jpg" className="rounded-xl" />
            </Carousel>
          </div>

          <div className="w-full bg-blue-300 rounded-xl flex flex-col gap-3 px-4 py-10">
            <img
              src="https://cdn0.fahasa.com/media/wysiwyg/Thang-11-2023/PoticoT11_392x165.png"
              className="rounded-xl hidden md:block hover:scale-105"
            />
            <img
              src="https://cdn0.fahasa.com/media/wysiwyg/Thang-11-2023/ZaloPay11_392x156_1.jpg"
              className="rounded-xl hidden md:block hover:scale-105 h-[150px]"
            />
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
