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
