import { Breadcrumb, Container, IntroduceCard } from "../../../components";

const IntroducePage = () => {
  const items = [
    {
      title: "Giới Thiệu BOOKSHOP",
      label: "Lịch sử hình thành và phát triển",
      text: "",
      description: [
        {
          label: "12",
          letter: "Năm kinh nghiệm",
        },
        {
          label: "20K",
          letter: "Khách hàng",
        },
        {
          label: "100%",
          letter: "Sự hài lòng của khách hàng",
        },
      ],
      order: false,
    },
    {
      title: "Tầm nhìn của chúng tôi",
      label:
        "Tầm nhìn của chúng tôi là đơn giản - chúng tôi tồn tại để tăng tốc tiến độ của khách hàng",
      text: "Với đà tăng trưởng 1 nhà sách / 1 năm trong 4 năm qua, trong 1-2 năm tiếp theo Nhà sách Tiến Thọ sẽ tiếp tục mở rộng và khai trương 2-3 cơ sở tại khu vực phía Bắc. Mục tiêu đến năm 2028, Nhà sách Tiến Thọ sẽ trở thành một chuỗi nhà sách & khu vui chơi lên đến 18-20 cơ sở",
      description: [
        {
          label: "1",
          letter: "Chúng tôi xây dựng mối quan hệ mạnh mẽ",
        },
        {
          label: "2",
          letter: "Chúng tôi khuyến khích sáng kiến và cung cấp cơ hội",
        },
        {
          label: "2",
          letter: "Chúng tôi đón nhận sự thay đổi và sáng tạo",
        },
        {
          label: "4",
          letter: "Chúng tôi ủng hộ một môi trường trung thực",
        },
      ],
      order: true,
    },
  ];

  return (
    <>
      <Container>
        <div className="mt-2 mb-5">
          <Breadcrumb text="Tiện ích - Giải trí - Kết nối" />
        </div>

        <div className="flex flex-col bg-white p-10 rounded-xl gap-10">
          {items.map((item) => (
            <div key={item.title}>
              <IntroduceCard item={item} order={item.order} />
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default IntroducePage;
