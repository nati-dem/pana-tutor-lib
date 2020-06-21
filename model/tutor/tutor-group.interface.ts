import {GroupStatus, GroupMemberStatus} from "../../enum/tutor.enum"
import {TutorGroupRole} from "../../enum/user.enum"

export interface TutorGroupRequest {
    id?:number,
    course_id: number,
    start_date: string, // format: 2020-04-17
    status?: GroupStatus,
    created_by?: number,
    owner:GroupMemberRequest
}

export interface GroupMemberRequest {
    id?: number,
    course_id: number,
    tutor_group_id: number,
    user_id: number,
    user_role: TutorGroupRole,
    status?: GroupMemberStatus
}

export interface TutorGroupCreate {
    id?: number,
    course_id: number,
    start_date:string, // format: 2020-04-17
    owner:GroupMember,
    status:GroupStatus
}

export interface GroupMember {
    user_id: number,
    user_role: TutorGroupRole,
    status:GroupMemberStatus,
    user_name? : string,
    email?: string,
    phone?: string
}

export interface TutorGroupCreate {
    id?: number,
    course_id: number,
    start_date:string, // format: 2020-04-17
    owner:GroupMember,
    status:GroupStatus
}

export interface GroupsInCourseResponse {
    groupId: number,
    course_id: number,
    start_date:string, // format: 2020-04-17
    groupStatus:GroupStatus,
    members:GroupMember[],
}
