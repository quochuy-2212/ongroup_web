import { posts_all_data } from '@/data/posts-all';
import { posts_coop_sponsor_data } from '@/data/posts-coop-sponsor';
import { posts_info_press_data } from '@/data/posts-info-press';
import { posts_member_company_data } from '@/data/posts-member-company';
import { posts_ongroup_data } from '@/data/posts-ongroup';

export const data_pathName = [
    '/tin-tuc-su-kien',
    '/tin-tuc-su-kien/cong-ty-thanh-vien',
    '/tin-tuc-su-kien/hop-tac-tai-tro',
    '/tin-tuc-su-kien/on-group',
    '/tin-tuc-su-kien/thong-tin-bao-chi',
];

export const typeDataPosts = [
    posts_all_data,
    posts_member_company_data,
    posts_coop_sponsor_data,
    posts_ongroup_data,
    posts_info_press_data,
];

export const typeNewsTitle = [
    'Tất cả bài viết',
    'Công ty thành viên',
    'Hợp tác - Tài trợ',
    'On Group',
    'Thông tin báo chí',
];
