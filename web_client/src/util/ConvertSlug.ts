export function ConvertSlug(title: string): string {
    let slug = title.toLowerCase(); // Chuyển thành chữ thường

    // Đổi ký tự có dấu thành không dấu
    const map: { [key: string]: string } = {
        á: 'a',
        à: 'a',
        ả: 'a',
        ạ: 'a',
        ã: 'a',
        ă: 'a',
        ắ: 'a',
        ằ: 'a',
        ẳ: 'a',
        ẵ: 'a',
        ặ: 'a',
        â: 'a',
        ấ: 'a',
        ầ: 'a',
        ẩ: 'a',
        ẫ: 'a',
        ậ: 'a',
        é: 'e',
        è: 'e',
        ẻ: 'e',
        ẽ: 'e',
        ẹ: 'e',
        ê: 'e',
        ế: 'e',
        ề: 'e',
        ể: 'e',
        ễ: 'e',
        ệ: 'e',
        í: 'i',
        ì: 'i',
        ỉ: 'i',
        ĩ: 'i',
        ị: 'i',
        ó: 'o',
        ò: 'o',
        ỏ: 'o',
        õ: 'o',
        ọ: 'o',
        ô: 'o',
        ố: 'o',
        ồ: 'o',
        ổ: 'o',
        ỗ: 'o',
        ộ: 'o',
        ơ: 'o',
        ớ: 'o',
        ờ: 'o',
        ở: 'o',
        ỡ: 'o',
        ợ: 'o',
        ú: 'u',
        ù: 'u',
        ủ: 'u',
        ũ: 'u',
        ụ: 'u',
        ư: 'u',
        ứ: 'u',
        ừ: 'u',
        ử: 'u',
        ữ: 'u',
        ự: 'u',
        ý: 'y',
        ỳ: 'y',
        ỷ: 'y',
        ỹ: 'y',
        ỵ: 'y',
        đ: 'd',
    };
    slug = slug.replace(/[^a-z0-9\s-]/g, (char) => map[char] || '');

    // Xóa các ký tự đặc biệt
    slug = slug.replace(/[`~!@#$%^&*()+={}\[\]:;"'<>,.?\/\\|_]/g, '');

    // Đổi khoảng trắng thành dấu gạch ngang
    slug = slug.replace(/\s+/g, '-');

    // Loại bỏ các dấu gạch ngang liên tiếp
    slug = slug.replace(/-+/g, '-');

    // Xóa dấu gạch ngang ở đầu và cuối
    slug = slug.replace(/^-+|-+$/g, '');

    return '/' + slug;
}
