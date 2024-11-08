'use client';
import React from 'react';
import { FaRegClock } from 'react-icons/fa';
import ImagePost from './components/ImagePost';
import TextPost from './components/TextPost';
import { posts_all_data } from '@/data/posts-all';
import useWindowSize from '@/hooks/useWindowSize';
import Post from '@/components/Post/Post';
import Link from 'next/link';

const DetailPostPage = () => {
    const { width } = useWindowSize();

    return (
        <div className="container m-auto">
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-2 pb-8">
                <p className="flex gap-2 items-center text-[var(--color-primary)] text-md">
                    <FaRegClock />
                    <span> 20/03/2024</span>
                </p>
                <div className="flex flex-col xl:flex-row gap-2">
                    <Link href="/"> Trang chủ /</Link>
                    <Link href="/"> Công ty thành viên /</Link>
                    <p className="text-[var(--color-primary)]">
                        Khai trương chi nhánh Hà Nội – Cột mốc vàng son trong sự nghiệp của Onlead
                    </p>
                </div>
            </div>
            <div>
                <div>
                    <h1 className="text-center text-[var(--color-primary)] text-3xl xl:text-5xl font-black pb-4">
                        Khai trương chi nhánh Hà Nội – Cột mốc vàng son trong sự nghiệp của Onlead
                    </h1>
                </div>
                <div className="flex justify-center py-8">
                    <p className="bg-gray-400 h-[3px] w-2/3"></p>
                </div>

                <div>
                    <TextPost>
                        Ngày 20/08/2022, trong sự kiện khai trương văn phòng Onlead chi nhánh Hà Nội đã có sự góp mặt
                        của hơn 300 khách mời là quý đối tác, quý khách hàng và hơn 100 nhân sự – đồng đội của Onlead.
                    </TextPost>
                    <ImagePost
                        src="https://onlead.vn/wp-content/uploads/2023/09/Onlead-484-of-1083-min.jpg"
                        caption="Sự kiện khai trương văn phòng Onlead chi nhánh Hà Nội"
                    />

                    <TextPost>
                        Onlead – hiện là công ty cung cấp giải pháp Marketing hàng đầu Việt Nam, với hành trình 5 năm
                        trao giá trị và cống hiến, công ty đã và đang đồng hành cùng hàng trăm doanh nghiệp trong việc
                        xây dựng chiến lược và triển khai các ý tưởng trong Marketing.
                    </TextPost>
                    <TextPost>
                        Sự tin tưởng và các giá trị mà khách hàng nhận được trong suốt 5 năm qua chính là minh chứng
                        sống động nhất cho vị thế của Onlead ngày hôm nay.
                    </TextPost>
                    <TextPost>
                        Lễ khánh thành Onlead Hà Nội sẽ mở ra một trang mới, là bước ngoặt đánh dấu cho sự phát triển
                        của Onlead Hà Nội nói riêng và Onlead cả nước nói chung.
                    </TextPost>
                    <TextPost>
                        Chúng tôi đang vô cùng háo hức và sẵn sàng trao đi tất cả để có thể hỗ trợ và giải quyết các vấn
                        đề của khách hàng trong việc Marketing – điều then chốt cho sự tồn tại và phát triển của mọi
                        doanh nghiệp thời đại 4.0.
                    </TextPost>
                    <ImagePost
                        src="https://onlead.vn/wp-content/uploads/2023/09/Onlead-226-of-1083-1-min.jpg"
                        caption="Sách “Phù Thủy Content” và sách “Khát vọng khởi nghiệp”"
                    />
                    <TextPost>
                        Founder Onlead – Nhất Thiên Quân là một tác giả, một diễn giả luôn tâm huyết và đam mê với việc
                        trao đi giá trị khi tặng hơn 50 000 cuốn sách “Phù Thủy Content” và 20.000 cuốn sách “Khát vọng
                        khởi nghiệp” đến các nhà khởi nghiệp, các chủ doanh nghiệp trên khắp cả nước. Đồng thời, anh đã
                        liên tục tổ chức các sự kiện, các khoá học cả online và offline chia sẻ về kiến thức khởi nghiệp
                        kinh doanh với phí là 0 đồng suốt 5 năm qua.
                    </TextPost>
                    <ImagePost
                        src="https://onlead.vn/wp-content/uploads/2023/09/Onlead-779-of-1083-min.jpg"
                        caption="Founder Onlead – Nhất Thiên Quân diễn giả nổi tiếng"
                    />
                    <TextPost>
                        Sắp tới, anh Ngô Văn Thanh với vai trò Giám đốc, sẽ là trụ cột của Onlead khu vực Hà Nội.
                    </TextPost>
                    <ImagePost
                        src="https://onlead.vn/wp-content/uploads/2023/09/Onlead-420-of-1083-min.jpg"
                        caption="Nguyễn Văn Thanh là trụ cột của Onlead khu vực Hà Nội"
                    />
                    <TextPost>
                        Anh Quân chia sẻ về mối quan hệ của hai người: “Chúng tôi gặp nhau khi còn rất trẻ, khi trong
                        tay chẳng có gì và đã luôn duy trì tình bạn, chia sẻ và động viên nhau trong suốt 7 năm vừa qua.
                        Thế nhưng tôi vẫn không thể ngờ được rằng, Thanh và tôi lại có ngày cùng nhau hướng đến một mục
                        tiêu cao cả như thế, đó là xây dựng một Onlead hùng mạnh trên nền tảng giá trị”.
                    </TextPost>
                    <ImagePost
                        src="https://onlead.vn/wp-content/uploads/2023/09/Onlead-483-of-1083-min.jpg"
                        caption="Hình ảnh Founder Onlead- Nhất Thiên Quân đang cùng khách mời"
                    />
                    <TextPost>
                        Công ty Onlead hiện đang có các chi nhánh tại Hồ Chí Minh và Hà Nội. Với tầm nhìn và mục tiêu
                        sắp tới, chúng tôi đang hướng đến một Onlead hiện diện trên khắp mọi miền đất nước. Là nơi tất
                        cả những ai đang gặp khó khăn trong các vấn đề liên quan đến kinh doanh và marketing có thể tìm
                        đến chúng tôi bất cứ lúc nào.
                    </TextPost>

                    <TextPost>
                        Chúng tôi sẽ luôn ý thức về tính cải tiến và hoàn thiện để mang đến những dịch vụ, trải nghiệm,
                        giải pháp tốt nhất đến khách hàng.
                    </TextPost>
                    <TextPost>
                        Tôn chỉ của chúng tôi là luôn lắng nghe vấn đề, cùng bàn bạc và đưa ra giải pháp tốt nhất cho
                        doanh nghiệp để giải quyết những rắc rối mà họ đang gặp phải.
                    </TextPost>
                    <ImagePost
                        src="https://onlead.vn/wp-content/uploads/2023/09/Onlead-416-of-1083-min.jpg"
                        caption="Tôn chỉ chúng tôi lắng nghe ý kiến khách hàng"
                    />
                    <TextPost>
                        in được gửi lời tri ân sâu sắc đến khách hàng, các anh em đồng nghiệp, đối tác đã đặt niềm tin
                        nơi chúng tôi. Chúng tôi sẽ luôn dốc hết sức mình để mang lại cho khách hàng những giải pháp
                        Marketing hiệu quả nhất. Onlead – Giải pháp Marketing Đột Phá
                    </TextPost>
                    <TextPost>Một số hình ảnh về lễ khai trương Onlead tại chi nhánh Hà Nội:</TextPost>
                    <ImagePost src="https://onlead.vn/wp-content/uploads/2023/09/Onlead-483-of-1083-min-1.jpg" />
                    <ImagePost src="https://onlead.vn/wp-content/uploads/2023/09/Onlead-358-of-1083-min.jpg" />
                    <ImagePost src="https://onlead.vn/wp-content/uploads/2023/09/Onlead-416-of-1083-min-min.jpg" />
                    <ImagePost src="https://onlead.vn/wp-content/uploads/2023/09/Onlead-420-of-1083-min-1.jpg" />
                    <ImagePost src="https://onlead.vn/wp-content/uploads/2023/09/Onlead-801-of-1083-min.jpg" />
                    <ImagePost src="https://onlead.vn/wp-content/uploads/2023/09/Onlead-497-of-1083-min.jpg" />
                    <ImagePost src="https://onlead.vn/wp-content/uploads/2023/09/Onlead-552-of-1083-min.jpg" />
                    <ImagePost src="https://onlead.vn/wp-content/uploads/2023/09/Onlead-769-of-1083-min.jpg" />
                    <ImagePost src="https://onlead.vn/wp-content/uploads/2023/09/Onlead-824-of-1083-min.jpg" />
                </div>
            </div>
            <div>
                <h2 className="pb-2 mb-4 mt-8 text-2xl xl:text-2xl text-[var(--color-primary)] font-bold border-b-2 border-solid border-[var(--color-primary)]">
                    Bài viết mới nhất
                </h2>
                <div className="grid grid-cols-2 xl:grid-cols-5 gap-5">
                    {posts_all_data?.slice(0, width < 768 ? 2 : width < 1023 ? 4 : 5).map((post) => (
                        <div key={post.id} className="col-span-1">
                            <Post key={post.id} data_post={post} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DetailPostPage;
