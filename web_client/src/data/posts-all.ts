import { IPosts } from '@/interface/data-interface';
import { posts_coop_sponsor_data } from './posts-coop-sponsor';
import { posts_info_press_data } from './posts-info-press';
import { posts_member_company_data } from './posts-member-company';
import { posts_ongroup_data } from './posts-ongroup';

export const posts_all_data: IPosts[] = [
    ...posts_coop_sponsor_data,
    ...posts_info_press_data,
    ...posts_member_company_data,
    ...posts_ongroup_data,
];
