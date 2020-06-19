import {RequestStatus} from "../../enum/tutor.enum"
import {YesNoChoice} from "../../enum/common.enum"

export interface TutorRequest {
    id?: number,
    student_id: number,
    course: string,
    tutor_ids?: string,
    grade_level?: number,
    start_date:string, // format: 2020-04-17
    duration?:string,
    group_allowed:YesNoChoice,
    trial_exp_date?: string,
    remark?:string,
    status:RequestStatus
}
