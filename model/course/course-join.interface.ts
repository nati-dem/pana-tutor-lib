import {STATUS} from "./../../enum/course.enum"

export interface CourseJoinRequest {
    course_id: number,
    user_id: number,
    trial_exp_date: string,
    complete_date: string,
    status:STATUS
}

