import React from 'react';

const DetailRecruitment = () => {
    return (
        <div>
            <h2 className="font-bold text-xl text-[var(--color-primary)]">Chi tiết tin tuyển dụng</h2>
            <ul className=" p-3 leading-10">
                <li>
                    • Phụ trách chính trong mảng quay phim ( chủ yếu quay video tiktok) quay phim review/ feedback theo
                    kịch bản có sẵn. Ưu tiên có nhiều kinh nghiệm xây kênh cho Agency
                </li>
                <li>• Set up bối cảnh quay cho những phân cảnh được phân công.</li>
                <li>• Đảm bảo hình ảnh, âm thanh, ánh sáng… tại vị trí quay.</li>
                <li>• Quản lý, sửa chữa các dụng cụ, phương tiện hỗ trợ quay phim.</li>
            </ul>
            <h2 className="font-bold text-xl text-[var(--color-primary)]">Yêu cầu ứng viên</h2>
            <div className=" p-3 leading-10">
                <p>• Biết sử dụng gimbal, thuần thục các góc máy</p>
                <p>• Nắm rõ thông số máy ảnh </p>
                <p>• Hiểu rõ màu sắc và ánh sáng khâu tiền kì</p>
                <p>• Quay 4K không bị noise, ko out nét…</p>
            </div>
            <h2 className="font-bold text-xl text-[var(--color-primary)]">Quyền lợi</h2>
            <ul className=" p-3 leading-10">
                <li>• Lương tháng thứ 13, thưởng lễ, tết.</li>
                <li>• Tham gia BHXH – BHYT – BHTN</li>
                <li>• Xét tăng lương hàng năm</li>
                <li>• Cơ hội đi du lịch mỗi năm.</li>
                <li>• Được đào tạo nâng cao trình độ, kỹ năng nghề nghiệp.</li>
                <li>• Làm việc trong môi trường có đội ngũ trẻ trung, nhiệt huyết.</li>
                <li>• Được đánh giá năng lực, phẩm chất để tạo cơ hội thăng tiến trong công việc.</li>
                <li>
                    • Được yêu cầu phối hợp cung cấp đầy đủ, kịp thời các thông tin cần thiết liên quan đến việc thực
                    hiện công việc.
                </li>
            </ul>
            <h2 className="font-bold text-xl text-[var(--color-primary)]">Địa điểm làm việc</h2>
            <p className=" p-3 leading-10 font-bold">Hồ Chí Minh:số 3, đường số 40, An Khánh, Thủ Đức</p>
            <h2 className="font-bold text-xl text-[var(--color-primary)]">Cách thức ứng tuyển</h2>
            <p className=" p-3 leading-10 font-bold flex flex-col">
                <span>Ứng viên nộp hồ sơ trực tuyến bằng cách bấm </span>
                <span className="cursor-pointer underline text-[var(--color-primary)] hover:text-red-500">
                    Ứng tuyển ngay tại đây
                </span>
            </p>
        </div>
    );
};

export default DetailRecruitment;
